import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent, BookCardComponent],
      imports:[ HttpClientModule, HttpClientTestingModule,      
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,
         NgxPaginationModule],
         providers:[GoogleBookApiService]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
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
 
});