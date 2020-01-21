import { AppPage } from './app.po';
import {BookViewerPage} from './book-viewer.po'
import { browser, logging } from 'protractor';

describe('Book Viewer Component Test', () => {
  let page: BookViewerPage;

  beforeEach(() => {
    page = new BookViewerPage();
  });

  //card Div
  it('should check div on Book Viewer component', () => {
    page.navigateToBookViewer();
    expect(page.isDivisionPresent()).toBeTruthy('<div> should exist in book-viewer.component.html');
  });
   ///View Sample button
 //button
//  it('should check for View Sample button on page', () => {
//   page.navigateToBookViewer();
//   expect(page.isButtonPresent()).toBeTruthy('<button> should exist in book-viewer.component.html');
// });
   it('should have View Sample button', () => {
    page.navigateToBookViewer();
    expect(page.getViewSampleButton()).toBeTruthy(`View Sample button should
      exist in book-viewer.component.html`);
  });


 



});

afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
