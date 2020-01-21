import { browser, by, element, promise, ElementFinder } from 'protractor';

export class BookViewerPage {

      // get login component
  navigateToBookViewer(): ElementFinder {
    return element(by.tagName('app-book-viewer'));
  }


  getBookViwerComponent() {
    return element(by.tagName('app-book-viewer'));
}

//Division
isDivisionPresent(){
    return element(by.css('div'));
  }
// get view sample button
getViewSampleButton(): ElementFinder {
    return this.getBookViwerComponent().element(by.buttonText('View Sample'));
  }
   
  
  getButton(){
    return element(by.css('button'));
  }
  isButtonPresent():promise.Promise<boolean>{
    return this.getButton().isPresent();
  }
  // check recommend button is present or not
  isViewSampleButtonPresent(): promise.Promise<boolean> {
    return this.getViewSampleButton().isPresent();
  }
  // click recommend button
  clickRecommendButton(): promise.Promise<void> {
    return this.getViewSampleButton().click();
  }

  
}
