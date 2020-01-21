import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPasswordComponent } from './edit-password.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule, FormGroupDirective, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('EditPasswordComponent', () => {
  let component: EditPasswordComponent;
  let fixture: ComponentFixture<EditPasswordComponent>;
  let obj: FormGroupDirective;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPasswordComponent ],
      imports:[  HttpClientModule,
        BrowserModule,HttpClientTestingModule,
        RouterTestingModule,
         ReactiveFormsModule,FormsModule
        ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasswordComponent);
    component = fixture.componentInstance;
    component.changePassword = formBuilder.group({
      password: ['password', Validators.required]
    });
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
});
// it('should contain form tag', () => {
//   let element = fixture.debugElement.query(By.css('form'));
//   expect(element).toBeTruthy();
//   });
//   it('should set submitted to true', async(() => {
//     component.changePassword;
//     expect(component.changePassword).toBeTruthy();
//   }));
//     it('should contain Update Password button', () => {
//       let element = fixture.debugElement.query(By.css('button'));
//       expect(element).toBeTruthy();
//       });
//   it('form invalid when new password is empty', () => {
//     expect(component.password.valid).toBeFalsy();
//   });
 
//   it('form invalid when confirm password is empty', () => {
//     expect(component.confirmPassword.valid).toBeFalsy();
//   });
  
//   it('form should be invalid when the fields are left empty', async(() => {
//     expect(component.password.valid).toBeFalsy();
//     expect(component.confirmPassword.valid).toBeFalsy();
//   }));
});
