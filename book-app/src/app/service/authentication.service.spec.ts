import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  
      imports:[ HttpClientModule,
        HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,HttpClientTestingModule],
         providers:[AuthenticationService]
  }));
  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
});