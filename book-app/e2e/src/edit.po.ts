import { browser, by, element, promise, ElementFinder } from 'protractor';

export class EditPage {
  navigateToEdit() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return element(by.tagName('app-edit'));
  }

  // --------------
  getForm(){
    return element(by.css('form'));
  }

  isFormPresent():promise.Promise<boolean>{
    return this.getForm().isPresent();
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
  
  // get submit button
  getSubmitButton(): ElementFinder {
    return element(by.buttonText('Update Changes'));
  }
}
