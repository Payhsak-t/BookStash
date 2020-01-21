import { TestBed } from '@angular/core/testing';
import { BasicAuthHttpInterceptorService } from './basic-auth-http-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BasicAuthHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule,
      BrowserModule,
      RouterTestingModule,
       ReactiveFormsModule,
       HttpClientTestingModule],
       providers:[BasicAuthHttpInterceptorService]
  }));
  it('should be created', () => {
    const service: BasicAuthHttpInterceptorService = TestBed.get(BasicAuthHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
