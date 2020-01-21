import { TestBed } from '@angular/core/testing';
import { RouterService } from './router.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[ HttpClientModule,
    BrowserModule,
    RouterTestingModule,
     ReactiveFormsModule,HttpClientTestingModule],
     providers:[RouterService
    ]}));
  it('should be created', () => {
    const service: RouterService = TestBed.get(RouterService);
    expect(service).toBeTruthy();
  });
});