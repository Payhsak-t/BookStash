import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailsComponent } from './book-details.component';
import { BookViewerComponent } from '../book-viewer/book-viewer.component';
import { BookCommentComponent } from '../book-comment/book-comment.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent, BookViewerComponent,BookCommentComponent ],
      imports:[ HttpClientModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,HttpClientTestingModule,
         MatDialogModule
        ],
         providers:[GoogleBookApiService]
        
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should contain book image ', () => {
    let element = fixture.debugElement.query(By.css('img'));
    expect(element).toBeTruthy();
  });
  it('should contain View Sample Of This Book button', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
});