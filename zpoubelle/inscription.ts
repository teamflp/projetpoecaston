// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { Router } from "@angular/router";
// import { User } from "../../services/user";
// import { UserService } from "../../services/user-service";
//
// @Component({
//   selector: 'app-inscription',
//   templateUrl: './inscription.component.html',
//   styleUrls: ['./inscription.component.scss']
// })
// export class InscriptionComponent implements OnInit {
//   hide = true;
//   cacher: Boolean = false;
//   afficher: Boolean = false;
//
//   profileForm = new FormGroup({
//     first_name: new FormControl(''),
//     last_name: new FormControl(''),
//     birthdate: new FormControl(''),
//     phone: new FormControl(''),
//     email: new FormControl(''),
//     password: new FormControl(''),
//     num: new FormControl(''),
//     street: new FormControl(''),
//     zip: new FormControl(''),
//     city: new FormControl(''),
//     category: new FormControl('')
//   });
//
//   inscription: User = new User();
//   submitted = false;
//
//   constructor(private nu: User, private router: Router){}
//
//   ngOnInit(): void {
//
//     // $('form').keyup((e) => {
//     //   if($('#first_name').val() === ""){
//     //     $('#fname').text('Ce champ est requis.').fadeIn(1000);
//     //     e.preventDefault();
//     //     return false;
//     //   }
//     //   else {
//     //     $('#fname').text('').fadeOut(1000);
//     //   }
//     //   if($('#last_name').val() === ""){
//     //
//     //   }
//     // })
//   }
//
//   showPassword() {
//     this.cacher = !this.cacher;
//     this.afficher = !this.afficher;
//   }
//
//   newInscription(): void {
//     this.submitted = false;
//     this.inscription = new User();
//   }
//
//   save() {
//     this.nu.createInscription(this.inscription).subscribe(
//       data => console.log(data),
//       error=> console.log(error));
//     this.inscription = new User();
//     // this.gotoList();
//   }
//   onSubmit() {
//     this.submitted = true;
//     this.save();
//   }
//
//   // private gotoList() {}
// }
