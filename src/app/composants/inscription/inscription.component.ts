import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl, NgForm} from '@angular/forms';
import { MustMatch } from '../mustmatch';
import { UsersService } from "../../service/users.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Users } from "../../models/users";
import {Router} from "@angular/router";

@Component({
  selector: 'app-Inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  // Control et validations des champs
  userForm: FormGroup;
	hide = true;
	pwdHide: Boolean = false;
	pwdShow: Boolean = false;
  pwdConfHide: Boolean = false;
  pwdConfShow: Boolean = false;
	submitted = false;
  user: Users = new class implements Users {
    birthday: Date;
    city: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    num: string;
    password: string;
    phone: string;
    street: string;
    zip: string;
  }

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router){}

//   inscriptionForm = new FormGroup({
//     first_name: new FormControl(['',Validators.required]),
//     last_name: new FormControl(['',Validators.required]),
//     birthday: new FormControl(['',Validators.required]),
//     phone: new FormControl(['',Validators.required]),
//     email: new FormControl('',[
//       Validators.required,
//       Validators.email]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.minLength(6)]),
//     passwordConfirm: new FormControl('',[Validators.required]),
//     num: new FormControl('',[Validators.required]),
//     street: new FormControl(['',Validators.required]),
//     zip: new FormControl(['',Validators.required]),
//     city: new FormControl(['',Validators.required])
//   },
//     {
//       validators: mustMatch('password', 'confirmation')
//     });

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name:['',Validators.required],
      last_name: ['',Validators.required],
      birthday: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['',Validators.required],
      num: ['',Validators.required],
      street: ['',Validators.required],
      zip: ['',Validators.required],
      city: ['',Validators.required],
    },{validator: MustMatch('password', 'passwordConfirm')
    });

  }
	get f(){
	  return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    alert("Votre compte a été créer avec succès.");
    // alert('Données enrégistrées.\n\n' + JSON.stringify(this.userForm.value, null, 4));
  }

  onReset(){
    this.submitted = false;
    this.userForm.reset();
  }

	showPassword() {
		this.pwdHide = !this.pwdHide;
		this.pwdShow = !this.pwdShow;
	}

  showPasswordConf() {
    this.pwdConfHide = !this.pwdConfHide;
    this.pwdConfShow = !this.pwdConfShow;
  }

  addUsers(){
    console.debug(this.user);
    this.usersService.addUsers(this.user).subscribe(data => {
      alert("Votre compte a été créer avec succès.");
      this.router.navigate([''])
    });
  }

}

