import { browser, by, element, promise, ElementFinder } from 'protractor';

export class RegisterPage {

  // get login component
  getloginComponent(): ElementFinder {
    return element(by.tagName('app-register'));
  }
  navigateToRegister() {
   // return browser.get('/login');
    return element(by.tagName('app-register'));
  }
  getEmailTextBox(){
    return element(by.name('email'));
  }
  getPasswordTextBox(){
    return element(by.name('password'));
  }
  getConfirmPasswordTextBox(){
    return element(by.name('confirmPassword'));
  }
  getNameTextBox(){
    return element(by.name('name'));
  }
  getDOBTextBox(){
    return element(by.name('dob'));
  }
  getGenderTextBox(){
    return element(by.name('gender'));
  }
  getPhoneTextBox(){
    return element(by.name('phone'));
  }

  getButton(){
    return element(by.css('button'));
  }
  getImage(){
    return element(by.css('img'));
  }
  isButtonPresent():promise.Promise<boolean>{
    return this.getButton().isPresent();
  }
  // get submit button
  getSubmitButton(): ElementFinder {
    return element(by.buttonText('Sign in'));
  }
//   // check submit button is present or not
//   isSubmitButtonPresent(): promise.Promise<boolean> {
//     return this.getSubmitButton().isPresent();
//   }
//   // click submit button
//   clickSubmitButton(): promise.Promise<void> {
//     return this.getSubmitButton().click();
//   }

}
