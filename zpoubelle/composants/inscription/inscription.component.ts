import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {InscriptionService} from "../../services/inscription.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
	hide = true;
	cacher: Boolean = false;
	afficher: Boolean = false;

    profileForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      birthdate: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      num: new FormControl(''),
      street: new FormControl(''),
      zip: new FormControl(''),
      city: new FormControl(''),
      category: new FormControl('')
    });

	submitted = false;
  inscription: any;

  constructor(private inscriptionService: InscriptionService){}

  ngOnInit(): void {}

	showPassword() {
		this.cacher = !this.cacher;
		this.afficher = !this.afficher;
	}

  saveInscription() {
    const data = {
      first_name: this.inscription.first_name,
      last_name: this.inscription.last_name,
      birthday: this.inscription.birthday,
      phone: this.inscription.phone,
      email: this.inscription.email,
      password: this.inscription.password,
      num: this.inscription.num,
      street: this.inscription.street,
      zip: this.inscription.zip,
      city: this.inscription.city,
      category: this.inscription.category
    };

    this.inscriptionService.create(data)
      .subscribe(
        response => {
           console.log(response.response);
           this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }
   newInscription(): void {
    this.submitted = false;
    this.inscription = {
      first_name: '',
      last_name: '',
      birthday: '',
      phone: '',
      email: '',
      password: '',
      num: '',
      street: '',
      zip: '',
      city: '',
      category: '',
      published: false
    };
   }
}
