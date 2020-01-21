import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';
import { ReactiveFormsModule } from '@angular/forms';
import { By, BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[  HttpClientModule,HttpClientTestingModule,
        BrowserModule,
        RouterTestingModule,
         ReactiveFormsModule,
        ],
      providers: [AuthenticationService, RouterService,RegisterComponent]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should set submitted to true', async(() => {
  //       component.registerSubmit(obj);
  //       expect(component.registerSubmit).toBeTruthy();
  //   }));
    it('should contain div tag', () => {
        let element = fixture.debugElement.query(By.css('div'));
        expect(element).toBeTruthy();
    });
    it('should contain form tag', () => {
      let element = fixture.debugElement.query(By.css('form'));
      expect(element).toBeTruthy();
      });
      it('should contain Sign In a tag', () => {
        let element = fixture.debugElement.query(By.css('a'));
        expect(element).toBeTruthy();
        });
        it('should contain Submit button', () => {
          let element = fixture.debugElement.query(By.css('button'));
          expect(element).toBeTruthy();
          });
      it('form invalid when name is empty', () => {
        expect(component.name.valid).toBeFalsy();
      });
      it('form invalid when email is empty', () => {
        expect(component.email.valid).toBeFalsy();
      });
      it('form invalid when password is empty', () => {
        expect(component.password.valid).toBeFalsy();
      });
      it('form invalid when password is empty', () => {
        expect(component.dob.valid).toBeFalsy();
      });
      it('form invalid when phone is empty', () => {
        expect(component.phone.valid).toBeFalsy();
      });
      it('form invalid when phone is empty', () => {
        expect(component.confirmPassword.valid).toBeFalsy();
      });
      it('form should be invalid when the fields are left empty', async(() => {
        expect(component.name.valid).toBeFalsy();
        expect(component.password.valid).toBeFalsy();
      }));
});