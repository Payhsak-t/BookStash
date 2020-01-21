import { TestBed } from '@angular/core/testing';

import { RecommendService } from './recommend.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RecommendService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule,
      BrowserModule,
      RouterTestingModule,
       ReactiveFormsModule,HttpClientTestingModule],
       providers:[RecommendService]
  }));
  it('should be created', () => {
    const service: RecommendService = TestBed.get(RecommendService);
    expect(service).toBeTruthy();
  });
});