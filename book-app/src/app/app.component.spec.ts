import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { GoogleBookApiService } from './service/google-book-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
​
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule,HttpClientTestingModule,
        HttpClientModule,BrowserAnimationsModule
      ],
      declarations: [
        AppComponent, HeaderComponent
      ],providers:[GoogleBookApiService,AuthenticationService]
    }).compileComponents();
  }));
​
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});