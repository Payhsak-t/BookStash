import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../service/register.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { RouterService } from '../service/router.service';
import * as _ from "lodash";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService, private routerService: RouterService) { }

  user: User = new User();
  users: Array<User> = [];

  registerForm: FormGroup;
  name: FormControl;
  dob: FormControl;
  gender: FormControl;
  fiction: FormControl;
  non_fiction: FormControl;
  biography: FormControl;
  graphic: FormControl;
  science: FormControl;
  phone: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  img: FormControl;
  genre: string = "";
  userFile: string;
  imagePath;
  errorMessage: string;
  imgURL = "../../assets/user.jpg";




  onFileSelected(event) {
    const file = event.target.files[0];
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result.toString();
      this.userFile = reader.result.toString();
    }
  }

  ngOnInit() {
    this.email = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.confirmPassword = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
    this.phone = new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]);
    this.gender = new FormControl('', Validators.required);
    this.fiction = new FormControl('');
    this.non_fiction = new FormControl('');
    this.graphic = new FormControl('');
    this.science = new FormControl('');
    this.biography = new FormControl('');
    this.img = new FormControl('', Validators.required);

    this.dob = new FormControl('', Validators.required);
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      name: this.name,
      phone: this.phone,
      gender: this.gender,
      graphic: this.graphic,
      science: this.science,
      fiction: this.fiction,
      non_fiction: this.non_fiction,
      biography: this.biography,
      dob: this.dob
    })
  }
  
  save() {
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.name = this.registerForm.value.name;
    this.user.phone = this.registerForm.value.phone;
    this.user.gender = this.registerForm.value.gender;
    this.user.dob = this.registerForm.value.dob;
    this.user.img = this.userFile;
    this.confirmPassword = new FormControl('', [Validators.required, Validators.pattern(this.registerForm.value.password)]);

    let genres: Array<string> = [];

	  if (this.registerForm.value.graphic)
	  {
		  genres.push("graphic-novels")
	  }
	  if (this.registerForm.value.science)
	  {
		  genres.push("science")
	  }
	  if (this.registerForm.value.biography)
	  {
		  genres.push("biography")
	  }
	  if (this.registerForm.value.fiction)
	  {
		  genres.push("fiction")
	  }
	  if (this.registerForm.value.non_fiction)
	  {
		  genres.push("non-fiction")
    }

    console.log(genres);
    
    if(genres.length > 0) {
      this.genre = genres[0];
      genres.splice(0,1);
      if(genres.length > 0) {
        genres.forEach(res =>{
          this.genre = this.genre + "," + res;
        })
      }
    }
    console.log(this.genre);
    this.user.genre = this.genre;

    this.registerService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.user = new User();
        this.routerService.tologin();
      },
      error => {
        
        this.errorMessage = "This user already exists."
        console.log(this.errorMessage);
      }
    );
    
  }

  onSubmit() {
    
    this.save();
  }
}