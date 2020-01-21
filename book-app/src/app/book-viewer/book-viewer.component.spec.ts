import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BookViewerComponent } from './book-viewer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BookViewerComponent', () => {
  let component: BookViewerComponent;
  let fixture: ComponentFixture<BookViewerComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookViewerComponent ],
      imports:[ HttpClientModule,HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,],
         providers:[]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewerComponent);
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
  it('should contain View Sample Of This Book button', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
});