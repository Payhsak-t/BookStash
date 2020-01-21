import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationComponent } from './recommendation.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
describe('RecommendationComponent', () => {
  let component: RecommendationComponent;
  let fixture: ComponentFixture<RecommendationComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationComponent ],
      imports:[ HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule, NgxPaginationModule],
         providers:[]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationComponent);
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