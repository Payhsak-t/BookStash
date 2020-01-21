
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteComponent } from './favourite.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('FavouriteComponent', () => {
  let component: FavouriteComponent;
  let fixture: ComponentFixture<FavouriteComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteComponent ],
      imports:[ HttpClientModule,HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,],
         providers:[]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteComponent);
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