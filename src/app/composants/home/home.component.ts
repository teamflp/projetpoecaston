import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    {
      id: 1,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2017/01/27/13/19/sculpture-2013048_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
    {
      id: 2,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2013/10/04/16/36/clock-tower-190677_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
    {
      id: 3,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2017/03/12/13/41/colorful-2137080_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
    {
      id: 4,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2019/05/31/13/35/art-gallery-4242219_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
     {
      id: 5,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2016/02/05/19/51/stained-glass-1181864_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
      {
      id: 6,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2020/08/28/16/17/bust-5524961_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
      {
      id: 7,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2017/01/13/07/41/kyoto-1976538_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
      {
      id: 8,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2017/12/18/14/07/woman-3026201_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
      {
      id: 9,
      name: 'Lorem Ipsum',
      image: 'https://cdn.pixabay.com/photo/2018/05/17/23/45/sculpture-3410011_960_720.jpg',
      description: 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
