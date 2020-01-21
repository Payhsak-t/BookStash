import { AppPage } from './app.po';
import {BookDetailsPage} from './book-details.po'
import { browser, logging } from 'protractor';
import { async } from 'q';

describe('Book Details Component Test', () => {
  let page: BookDetailsPage;

  beforeEach(() => {
    page = new BookDetailsPage();
  });

  //card Div
  it('should check div on Book Details component', () => {
    page.navigateToBookDetails();
    expect(page.isDivisionPresent()).toBeTruthy('<div> should exist in book-details.component.html');
  });

//button
  // it('should check for buttons on page', () => {
  //   page.navigateToBookDetails();
  //   expect(page.isButtonPresent()).toBeTruthy('<button> should exist in dashboard.component.html');
  // });
  // ///Recommend button
 
  it('should get Recommend button',() => {
    page.navigateToBookDetails();
    expect(page.getRecommendButton()).toBeTruthy(`Recommend button should
      exist in book-details.component.html`);
  });
 
  // // Fav Button
  it('should get Favourite button', () => {
    page.navigateToBookDetails();
    expect(page.getFavButton()).toBeTruthy(`Favourite button should
      exist in book-details.component.html`);
  });
  //  // Rate Button
   it('should get Rate button', () => {
    page.navigateToBookDetails();
    expect(page.getRateButton()).toBeTruthy(`Rate button should
      exist in book-details.component.html`);
  });

// //click recommend button
//   it('should click Recommend button', () => {
//     page.navigateToBookDetails();
//     expect(page.isRecommendButtonPresent()).toBeTruthy(`Recommend button should
//       be clicked in book-details.component.html`);
//       page.clickRecommendButton();

//   });
// //click fav button
// it('should click Favourite button', () => {
//     page.navigateToBookDetails();
//     expect(page.isFavButtonPresent()).toBeTruthy(`Favourite button should
//       be clicked in book-details.component.html`);
//       page.clickFavButton();

//   });
//   //click rate button
// it('should click Rate button', () => {
//     page.navigateToBookDetails();
//     expect(page.isRateButtonPresent()).toBeTruthy(`Rate button should
//       be clicked in book-details.component.html`);
//       page.clickRateButton();

//   });

});

afterEach( async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
 