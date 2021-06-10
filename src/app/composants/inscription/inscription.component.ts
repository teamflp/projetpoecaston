import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import { MustMatch } from '../mustmatch';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
	hide = true;
	cacher: Boolean = false;
	afficher: Boolean = false;
	submitted = false;

  constructor(private formBuilder: FormBuilder){}

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
    this.inscriptionForm = this.formBuilder.group({
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
	  return this.inscriptionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.inscriptionForm.invalid){
      return;
    }

    alert('Données enrégistrées.\n\n' + JSON.stringify(this.inscriptionForm.value, null, 4));
  }

  onReset(){
    this.submitted = false;
    this.inscriptionForm.reset();
  }

	showPassword() {
		this.cacher = !this.cacher;
		this.afficher = !this.afficher;
	}
}

