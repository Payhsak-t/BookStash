import { browser, by, element, promise, ElementFinder } from 'protractor';

export class FavPage {
  navigateToFav() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return element(by.tagName('app-favourite'));
  }

  // --------------
  getDiv(){
    return element(by.css('div'));
  }
  getImg(){
      return element(by.className('card-img-top'))
  }
}