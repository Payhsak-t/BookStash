import { browser, by, element, promise, ElementFinder } from 'protractor';

export class LoginPage {

  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-login'));
  }
  navigateToLogin() {
   // return browser.get('/login');
    return element(by.tagName('app-login'));

  }
  getEmailTextBox(){
    return element(by.name('email'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
  getButton(){
    return element(by.css('button'));
  }
  isButtonPresent():promise.Promise<boolean>{
    return this.getButton().isPresent();
  }
  // get submit button
  getSubmitButton(): ElementFinder {
    return this.getloginComponent().element(by.buttonText('Log In'));
  }
  // check submit button is present or not
  isSubmitButtonPresent(): promise.Promise<boolean> {
    return this.getSubmitButton().isPresent();
  }
  // click submit button
  clickSubmitButton(): promise.Promise<void> {
    return this.getSubmitButton().click();
  }

}
