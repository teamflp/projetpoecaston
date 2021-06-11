import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormControl} from '@angular/forms';
import {MustMatch} from "../mustmatch";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  pwdHide: Boolean = false;
  pwdShow: Boolean = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    alert('Données enrégistrées.\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  showPassword() {
    this.pwdHide = !this.pwdHide;
    this.pwdShow = !this.pwdShow;
  }

}
