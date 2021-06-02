import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {}

  // Le menu hamburger apparait sur small screen.
  myMenu() {
      const menu = document.getElementById("menu");
      // const links = document.querySelector("navbarSupportedContent");
      if (menu.className.indexOf("w3-show") == -1) {
        menu.className += " w3-show w3-black";
        // links.className = links.className.replace("navbar-collapse", "w3-hide-medium w3-hide-large");
      } else {
        // menu.className = menu.className.replace(" w3-show", "");
      }
  }
}
