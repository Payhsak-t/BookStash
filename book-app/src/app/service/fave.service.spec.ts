import { TestBed } from '@angular/core/testing';
import { FaveService } from './fave.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('FaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule,
      BrowserModule,
      RouterTestingModule,
       ReactiveFormsModule,HttpClientTestingModule],
       providers:[FaveService]
  }));
  it('should be created', () => {
    const service: FaveService = TestBed.get(FaveService);
    expect(service).toBeTruthy();
  });
});

