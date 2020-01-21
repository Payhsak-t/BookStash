import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCommentComponent } from './book-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BookCommentComponent', () => {
  let component: BookCommentComponent;
  let fixture: ComponentFixture<BookCommentComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCommentComponent ],
      imports:[ HttpClientModule,
        BrowserModule,
        RouterTestingModule,HttpClientTestingModule,
         ReactiveFormsModule,],
         providers:[GoogleBookApiService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BookCommentComponent);
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
  it('should contain text Box for Comment', () => {
    let element = fixture.debugElement.query(By.css('form'));
    expect(element).toBeTruthy();
  });
  it('should contain comment button', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
  it('should display all comments', () => {
    let element = fixture.debugElement.query(By.css('ul'));
    expect(element).toBeTruthy();
  });
});