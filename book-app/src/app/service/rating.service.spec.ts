import { TestBed } from '@angular/core/testing';
import { RatingService } from './rating.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[ HttpClientModule,
    BrowserModule,
    RouterTestingModule,
     ReactiveFormsModule,HttpClientTestingModule],
     providers:[RatingService]}));
  it('should be created', () => {
    const service: RatingService = TestBed.get(RatingService);
    expect(service).toBeTruthy();
  });
});