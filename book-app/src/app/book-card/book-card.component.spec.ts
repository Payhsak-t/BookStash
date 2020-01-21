import { async, ComponentFixture, TestBed } from '@angular/core/testing';
​
import { BookCardComponent } from './book-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FaveService } from '../service/fave.service';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { StarRatingComponent } from 'ng-starrating';
import { Rating } from '../rating';
import { RatingService } from '../service/rating.service';
import { GoogleBookApiService } from '../service/google-book-api.service';
import { RecommendService } from '../service/recommend.service';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Book } from '../book';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('BookCardComponent', () => {
  let component: BookCardComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;
​
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentWrapper, BookCardComponent, StarRatingComponent ],
      imports:[ HttpClientModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,HttpClientTestingModule,
         MatDialogModule ,
        RouterModule],
         providers:[GoogleBookApiService, FaveService,RecommendService,RatingService ],      
         schemas: [CUSTOM_ELEMENTS_SCHEMA]
​
    })
    .compileComponents();
    const service = TestBed.get(GoogleBookApiService);
​
  }));
​
  beforeEach(() => {
​
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
    // fixture = TestBed.createComponent(BookCardComponent);
    // component = fixture.componentInstance;
    // // component = fixture.debugElement.children[0].componentInstance;
​
  //  fixture.detectChanges();
  });
​
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('should contain book image', () => {
    let element = fixture.debugElement.query(By.css('img'));
    expect(element).toBeTruthy();
  });
  it('should contain Recommend button', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });
​
  
  @Component({
    selector: 'test-component-wrapper',
    template: '<app-book-card [faveArray]="faveArray"></app-book-card>'
  })
  class TestComponentWrapper {
    bookone: Book;
    faveArray: Array<string>;
  }
});