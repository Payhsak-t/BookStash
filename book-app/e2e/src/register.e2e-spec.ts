import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { RegisterPage } from './register.po';

describe('Register Test', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
    page.navigateToRegister();
  });
//img
  it('should have image tag', () => {
    page.navigateToRegister();
    expect(page.getImage())
    .toBeTruthy(`Image tag for image should exist in register.component.html`);
  });
//Input Box Email
  it('should get email input box', () => {
    page.navigateToRegister();
    expect(page.getEmailTextBox())
    .toBeTruthy(`Input box for email should exist in register.component.html`);
  });

  //Input Box Password
  it('should get passsword input box', () => {
    page.navigateToRegister();
    expect(page.getPasswordTextBox())
    .toBeTruthy(` Input box for password
      should exist in register.component.html`);
  });
  it('should get Confirm passsword input box', () => {
    page.navigateToRegister();
    expect(page.getConfirmPasswordTextBox())
    .toBeTruthy(` Input box for Confirm password
      should exist in register.component.html`);
  });

  it('should get DOB input box', () => {
    page.navigateToRegister();
    expect(page.getDOBTextBox())
    .toBeTruthy(` Input box for DOB
      should exist in register.component.html`);
  });

  it('should get Gender input box', () => {
    page.navigateToRegister();
    expect(page.getGenderTextBox())
    .toBeTruthy(` Input box for Gender
      should exist in register.component.html`);
  });
  it('should get User Name input box', () => {
    page.navigateToRegister();
    expect(page.getNameTextBox())
    .toBeTruthy(` Input box for User Name
      should exist in register.component.html`);
  });
  it('should get Phone Number input box', () => {
    page.navigateToRegister();
    expect(page.getPhoneTextBox())
    .toBeTruthy(` Input box for Phone Number
      should exist in register.component.html`);
  });
  

  //submit  
  it('should check for Submit button on page', () => {
  page.navigateToRegister();
  expect(page.getSubmitButton()).toBeTruthy('Submit button should exist in register.component.html');
});
  //Submit Button
  // it('should get submit button', () => {
  //   page.navigateToLogin();
  //   expect(page.isSubmitButtonPresent()).toBeTruthy(`<button type="submit" (click)=loginSubmit() class="submit" [disabled]='!loginform.valid'>Log In</button> should
  //     exist in login.component.html`);
  // });
});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});