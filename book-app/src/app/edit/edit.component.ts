import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { RouterService } from '../service/router.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private registerService: RegisterService, private authService: AuthenticationService, private routerService: RouterService) { 
    this.authService.isUserAuthenticated().then(authenticated => {});
  }
  emails: string;
  user: any;
  editForm: FormGroup;
  name: FormControl;
  dob: FormControl;
  gender: FormControl;
  fiction: FormControl;
  non_fiction: FormControl;
  biography: FormControl;
  graphic: FormControl;
  fantasy: FormControl;
  phone: FormControl;
  email: FormControl;
  naam: string;
  genre: string = "";
  uId: number;
  submitMessage: string;
  genres: Array<String> =[];
  imgURL = "../../assets/user.jpg";
  imagePath;
  onFileSelected(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.imgURL = reader.result.toString();
    }
  }
  ngOnInit() {
    this.email = new FormControl('');
    this.name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
    this.gender = new FormControl('', Validators.required);
    this.fiction = new FormControl('');
    this.non_fiction = new FormControl('');
    this.graphic = new FormControl('');
    this.fantasy = new FormControl('');
    this.biography = new FormControl('');
    this.dob = new FormControl('', Validators.required);
    this.editForm = new FormGroup({
      email: this.email,
      name: this.name,
      phone: this.phone,
      gender: this.gender,
      graphic: this.graphic,
      fantasy: this.fantasy,
      fiction: this.fiction,
      non_fiction: this.non_fiction,
      biography: this.biography,
      dob: this.dob
    })
    if (sessionStorage.getItem("email") !== null) {
      this.emails = sessionStorage.getItem("email");
      console.log(this.email);
      this.user = this.registerService.getUser(this.emails)
        .subscribe(
          data => {
            this.name.setValue(data.name);
            this.naam = data.name;
            this.dob.setValue(data.dob);
            this.gender.setValue(data.gender);
            this.phone.setValue(data.phone);
            this.email.setValue(data.email);
            if(data.img != null) {
              this.imgURL = data.img;
            }
            this.uId = data.id;
          });
    }
  }
    update() {
      this.user.name = this.editForm.value.name;
      this.user.phone = this.editForm.value.phone;
      this.user.img = this.imgURL;
      this.registerService.updateUser(this.emails, this.user).subscribe(
        data => {
          this.submitMessage = `Dear ${this.naam},`;
        },
        error => console.log(error)
      );
      this.user = new User();
    }
    onSubmit() {
      this.update();
    }

    onDelete() {
      this.registerService.deleteUser(this.uId).subscribe(data => {
        this.authService.logOut();
        this.routerService.toHome();
      })
    }
  }