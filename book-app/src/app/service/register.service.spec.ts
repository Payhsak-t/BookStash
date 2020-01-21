import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    imports:[ HttpClientModule,
    BrowserModule,
    RouterTestingModule,
     ReactiveFormsModule,HttpClientTestingModule],
     providers:[RegisterService]}));
  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
