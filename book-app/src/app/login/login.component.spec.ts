import { async, ComponentFixture, TestBed, inject,  } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { RouterService } from '../service/router.service';
import { AuthenticationService } from '../service/authentication.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('loginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService: AuthenticationService;
  let routerService: RouterService;
  let mySpy: any;
  let obj: FormGroupDirective;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
       BrowserModule,
       RouterTestingModule,
        ReactiveFormsModule,
        NgxPaginationModule
      ],
      providers: [AuthenticationService, RouterService]
    })
    // })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.get(AuthenticationService);
    routerService = TestBed.get(RouterService);
    fixture.detectChanges();
  });
  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
  
  it('should set submitted to true', async(() => {
    component.loginform;
    expect(component.loginform).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('form invalid when email is empty', () => {
    expect(component.email.valid).toBeFalsy();
  });
  it('form invalid when password is empty', () => {
    expect(component.password.valid).toBeFalsy();
  });
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.email.valid).toBeFalsy();
    expect(component.password.valid).toBeFalsy();
  }));  
});