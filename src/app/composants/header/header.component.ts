import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // cover = 'https://cdn.pixabay.com/photo/2014/07/01/12/34/road-381227_960_720.jpg';
  // cover = 'https://cdn.pixabay.com/photo/2020/03/19/20/39/greenhouse-4948726_960_720.jpg';
  // cover = 'https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090815_960_720.jpg';
  // cover = 'https://cdn.pixabay.com/photo/2012/11/20/06/11/nike-66681_960_720.jpg';
     cover = 'https://cdn.pixabay.com/photo/2016/11/22/21/46/arches-1850730_960_720.jpg';

      isShown:boolean = false;
      isSticky: boolean = false;
  constructor() { }

  ngOnInit(): void {

//     $(window).ready(() => {
//          if($(document).scrollTop() >= 250){
//             $(".navbar-principale").css({
//                position: "fixed",
//                top: 0
//             });
//             $(".navbar-secondaire").fadeOut(600);
//          }
//          else{
//             $(".navbar-principale").slideDown(600);
//             $(".navbar-secondaire").fadeIn(600);
//          }
//     });
  }
      @HostListener('window:scroll', ['$event'])
      checkScroll() {
        this.isSticky = window.pageYOffset >= 250;
      }
}
