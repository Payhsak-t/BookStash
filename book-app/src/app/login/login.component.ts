import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { RouterService } from '../service/router.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  email: FormControl;
  password: FormControl;
  submitMessage: string;
  login: User = new User();
  // user: User= new User();
   user:any;
   array: any[];

  constructor(private authservice: AuthenticationService, private routerservice: RouterService) { }

  ngOnInit() {
    this.email = new FormControl('', Validators.required),
      this.password = new FormControl('', Validators.required)
    this.loginform = new FormGroup({
      email: this.email,
      password: this.password

    });
  }
  loginSubmit() {
    this.login.email = this.loginform.value.email;
    this.login.password = this.loginform.value.password;
    console.log(this.loginform.value);
    this.submitMessage = this.loginform.value.email;
      this.authservice.authenticate(this.login.email, this.login.password).subscribe((data)=>{
      if (data != null) {
        console.log(data);
        console.log(this.login.email);
        this.routerservice.toHome();
      }
    },
      error => {
        console.log("error")
        alert('You have entered incorrect Email or Password!')
      });

    // sessionStorage.setItem("key", this.user.id);
  }
}
