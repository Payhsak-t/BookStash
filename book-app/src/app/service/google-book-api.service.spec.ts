import { TestBed } from '@angular/core/testing';
import { GoogleBookApiService } from './google-book-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('GoogleBookApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [
    RouterTestingModule,
    RouterModule,
   HttpClientTestingModule,
   BrowserAnimationsModule
  ],
  providers:[GoogleBookApiService]}));
  it('should be created', () => {
    const service: GoogleBookApiService = TestBed.get(GoogleBookApiService);
    expect(service).toBeTruthy();
  });
});