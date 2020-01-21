import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';


const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'bookDetails/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
