import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const control = new FormControl('phone');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports:[  HttpClientModule,HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,
        ],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
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
it('should contain form tag', () => {
  let element = fixture.debugElement.query(By.css('form'));
  expect(element).toBeTruthy();
  });
  
    it('should contain Update Changes button', () => {
      let element = fixture.debugElement.query(By.css('button'));
      expect(element).toBeTruthy();
      });
  it('form invalid when name is empty', () => {
    expect(component.name.valid).toBeFalsy();
  });
 
  it('form invalid when phone is empty', () => {
    expect(component.phone.valid).toBeFalsy();
  });
  
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.name.valid).toBeFalsy();
    expect(component.phone.valid).toBeFalsy();
  }));
});