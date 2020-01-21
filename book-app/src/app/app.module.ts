import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



import { RecommendationComponent } from './recommendation/recommendation.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BookCardComponent, BookCardRatingComponent } from './book-card/book-card.component';

import { RouterService } from './service/router.service';
import { AuthenticationService } from './service/authentication.service';
import { GoogleBookApiService } from './service/google-book-api.service';
import { ResultComponent } from './result/result.component';
import { BookDetailsComponent, BookDetailsRatingComponent } from './book-details/book-details.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookViewerComponent } from './book-viewer/book-viewer.component';
import { BookCommentComponent } from './book-comment/book-comment.component';
import { EditComponent } from './edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { AuthGuard } from './guard/auth.guard';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favourite',
    component: FavouriteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bookDetails/:id',
    component: BookDetailsComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'recommend',
    component: RecommendationComponent
  },
  {
    path: 'editpass',
    component: EditPasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RecommendationComponent,
    FavouriteComponent,
    BookCardComponent,
    EditComponent,
    ResultComponent,
    BookDetailsComponent,
    BookViewerComponent,
    BookCommentComponent,
    EditComponent,
    BookCardRatingComponent,
    BookDetailsRatingComponent,
    EditPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    NgbModule,
    RatingModule ,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    BookCardComponent,
    BookCardRatingComponent,
    BookDetailsComponent,
    BookDetailsRatingComponent 
  ],
  providers: [GoogleBookApiService, RouterService, AuthenticationService,BasicAuthHttpInterceptorService,{  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true }], 
  bootstrap: [AppComponent]
})
export class AppModule { }
