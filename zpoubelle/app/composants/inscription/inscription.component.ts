import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl, NgForm} from '@angular/forms';
import { MustMatch } from '../mustmatch';
import { InscriptionService } from "../../service/inscription.service";
import { HttpErrorResponse } from "@angular/common/http";
import {Inscription} from "../../models/inscription";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
	hide = true;
	pwdHide: Boolean = false;
	pwdShow: Boolean = false;
  pwdConfHide: Boolean = false;
  pwdConfShow: Boolean = false;
	submitted = false;
  inscription: Inscription[];
  editInscription: Inscription;
  deleteInscription: Inscription;
  inscriptionService: any;

  constructor(private formBuilder: FormBuilder, inscriptionService: InscriptionService){}

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

    this.getInscription();
  }

  getInscription(): void {
   this.inscriptionService.getInscription().subscribe(
     (response: Inscription[]) => {
       this.inscription = response;
   },
     (error: HttpErrorResponse) => {
     alert(error.message);
     }
   );
  }

  onAddInscription(addForm: NgForm): void {
    document?.getElementById('add-new-user')?.click();
    this.inscriptionService.addInscription(addForm.value).subscribe((response: Inscription) => {
      console.log(response);
      this.getInscription();
      addForm.reset();
    },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    onUpdateInscription(inscription:Inscription): void{

    }
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
		this.pwdHide = !this.pwdHide;
		this.pwdShow = !this.pwdShow;
	}

  showPasswordConf() {
    this.pwdConfHide = !this.pwdConfHide;
    this.pwdConfShow = !this.pwdConfShow;
  }
}

