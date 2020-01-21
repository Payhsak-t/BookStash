import { TestBed } from '@angular/core/testing';
import { CommentService } from './comment.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[ HttpClientModule,
      BrowserModule,
      RouterTestingModule,
       ReactiveFormsModule,HttpClientTestingModule],
       providers:[CommentService]
  }));
  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});