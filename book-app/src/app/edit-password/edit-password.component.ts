import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from '../user';
import { RouterService } from '../service/router.service';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {

  password: FormControl;
  confirmPassword: FormControl;
  changePassword: FormGroup;
  userEmail: string;
  constructor(private registerService: RegisterService, private routerService: RouterService) { }

  ngOnInit() {
    if (sessionStorage.getItem("email") != null) {
      this.userEmail = sessionStorage.getItem("email");
      this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
      this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
      this.changePassword = new FormGroup({
        password: this.password
      });
    }
  }

  passwordChange() {
    console.log(this.changePassword.value);
    this.registerService.updatePassword(this.userEmail,this.changePassword.value.password).subscribe();
    this.routerService.toEdit();
  }
}
