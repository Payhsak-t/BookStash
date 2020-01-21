import { browser, by, element, promise, ElementFinder } from 'protractor';

export class BookDetailsPage {

      // get login component
  getBookDetailsComponent(): ElementFinder {
    return element(by.tagName('app-book-details'));
  }
  navigateToBookDetails() {
  //  return browser.get('/bookDetails');
    return element(by.tagName('app-book-details'));

  }

//Division
isDivisionPresent(){
    return element(by.css('div'));
  }


  //
  getButton(){
    return element(by.css('button'));
  }
  isButtonPresent():promise.Promise<boolean>{
    return this.getButton().isPresent();
  }

  // get recommend button
  getRecommendButton(){
    return this.getBookDetailsComponent().element(by.buttonText('Recommend'));
  }
  // check recommend button is present or not
  isRecommendButtonPresent(): promise.Promise<boolean> {
    return this.getRecommendButton().isPresent();
  }
  // click recommend button
  clickRecommendButton(): promise.Promise<void> {
    return this.getRecommendButton().click();
  }

  // get fav button
  getFavButton(): ElementFinder {
    return this.getBookDetailsComponent().element(by.buttonText('Favourite'));
  }
  // check fav button is present or not
  isFavButtonPresent(): promise.Promise<boolean> {
    return this.getFavButton().isPresent();
  }
  // click fav button
  clickFavButton(): promise.Promise<void> {
    return this.getFavButton().click();
  }

  // get rate button
  getRateButton(): ElementFinder {
    return this.getBookDetailsComponent().element(by.buttonText('Rate'));
  }
  // check rate button is present or not
  isRateButtonPresent(): promise.Promise<boolean> {
    return this.getRateButton().isPresent();
  }
  // click rate button
  clickRateButton(): promise.Promise<void> {
    return this.getRateButton().click();
  }
}
