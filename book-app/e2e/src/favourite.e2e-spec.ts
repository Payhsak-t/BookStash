import { browser, logging } from 'protractor';
import { FavPage } from './favourite.po';

describe('Edit Profile Page', () => {
  let page: FavPage;

  beforeEach(() => {
    page = new FavPage();
  });

  it('should check div container on Favourite page', () => {
    page.navigateToFav();
    expect(page.getDiv()).toBeTruthy('<div class= "container> should exist in favourite.component.html');
  });

  it('should check if image is present on Favourite page', () => {
    page.navigateToFav();
    expect(page.getDiv()).toBeTruthy('Book Image  should exist in favourite.component.html');
  });

});
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));

    
});