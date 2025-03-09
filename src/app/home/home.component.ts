import { Component } from '@angular/core';
import { CardFadeinDirective } from '../directives/card-fadein.directive';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutusFadeinDirective } from '../directives/aboutus-fadein.directive';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardFadeinDirective,
    GoogleMapsModule,
    AboutusFadeinDirective,
    CommonModule,
    CardFadeinDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imageSlides = [
    {
      image: '../../assets/image/customizedBags.png',
      caption: ' MiGig Customized Bags',
    },
    {
      image: '../../assets/image/customizedKeyboard.jpg',
      caption: 'Keyboard',
    },
    {
      image: '../../assets/image/customizedGuitar.jpg',
      caption: 'Guitar',
    },
  ];

  productImages = [
    {
      images: [
        '../../assets/image/products/g1.png',
        '../../assets/image/products/g2.png',
      ],
      title: 'Guitar',
    },
    {
      images: [
        '../../assets/image/products/k1.png',
        '../../assets/image/products/k2.png',
      ],

      title: 'Keyboard',
    },
    {
      images: [
        '../../assets/image/products/drumpad1.png',
        '../../assets/image/products/drumpad2.png',
      ],

      title: 'Drum Pad',
    },
    {
      images: [
        '../../assets/image/products/ampli1.png',
        '../../assets/image/products/ampli2.png',
      ],

      title: 'Amplifier',
    },
    {
      images: [
        '../../assets/image/products/c1.png',
        '../../assets/image/products/c2.png',
      ],

      title: 'Percussion',
    },
    {
      images: [
        '../../assets/image/products/c1.png',
        '../../assets/image/products/c2.png',
      ],

      title: 'Percussion',
    },
  ];

  aboutUsImage = '../../assets/image/abt.jpg';
}
