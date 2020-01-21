import { browser, logging } from 'protractor';
import { EditPage } from './edit.po';

describe('Edit Profile Page', () => {
  let page: EditPage;

  beforeEach(() => {
    page = new EditPage();
  });

  it('should check form on Edit page', () => {
    page.navigateToEdit();
    expect(page.getForm()).toBeTruthy('<form> should exist in edit.component.html');
  });
  
  //img
  it('should have image tag', () => {
    page.navigateToEdit();
    expect(page.getImage())
    .toBeTruthy(`Image tag for image should exist in edit.component.html`);
  });


  //Input Box Password
  it('should get edit passsword input box', () => {
    page.navigateToEdit();
    expect(page.getPasswordTextBox())
    .toBeTruthy(` Input box for password
      should exist in edit.component.html`);
  });
 
  

  it('should get Gender input box', () => {
    page.navigateToEdit();
    expect(page.getGenderTextBox())
    .toBeTruthy(` Input box for Gender
      should exist in edit.component.html`);
  });
  it('should get User Name input box', () => {
    page.navigateToEdit();
    expect(page.getNameTextBox())
    .toBeTruthy(` Input box for User Name
      should exist in edit.component.html`);
  });
  it('should get Phone Number input box', () => {
    page.navigateToEdit();
    expect(page.getPhoneTextBox())
    .toBeTruthy(` Input box for Phone Number
      should exist in edit.component.html`);
  });
  

  //submit  
  it('should check for Submit button on page', () => {
  page.navigateToEdit();
  expect(page.getSubmitButton()).toBeTruthy('Submit button should exist in register.component.html');
});



});
afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});
