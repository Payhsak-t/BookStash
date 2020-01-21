import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';

describe('LOGIN TEST', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateToLogin();
  });

//Input Box Email
  it('should get username input box', () => {
    page.navigateToLogin();
    expect(page.getEmailTextBox())
    .toBeTruthy(`<input type="text" [formControl]='email' matInput class="input"> should exist in login.component.html`);
  });

  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToLogin();
    expect(page.getPasswordTextBox())
    .toBeTruthy(`<input type="password" [formControl]='password' class="input">
      should exist in login.component.html`);
  });

 // submit  
//   it('should check for View Sample button on page', () => {
//   page.navigateToLogin();
//   expect(page.isButtonPresent()).toBeTruthy('<button> should exist in login.component.html');
// });
  //Submit Button
  it('should get Log in button', () => {
    page.navigateToLogin();
    expect(page.getSubmitButton()).toBeTruthy(`<button type="submit" (click)=loginSubmit() class="submit" [disabled]='!loginform.valid'>Log In</button> should
      exist in login.component.html`);
  });
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});