import { Component } from '@angular/core';
import { CardFadeinDirective } from '../directives/card-fadein.directive';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutusFadeinDirective } from '../directives/aboutus-fadein.directive';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
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
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Migig Customized Gig Bags');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Design your perfect gig bag with custom materials, colors, and features. High-quality protection for your musical instruments, tailored to your style.',
      },
      {
        name: 'keywords',
        content:
          'migig, migig customize gig bags, customize bags, custom gig bags, personalized instrument bags, guitar case customization, premium gig bags, music accessories',
      },
      {
        name: 'author',
        content: 'Migig',
      },
      {
        property: 'og:title',
        content: 'Migig Customized Gig Bags',
      },
      {
        property: 'og:description',
        content:
          'Create a custom gig bag for your guitar, bass, or other instruments. Choose colors, and add your personal touch!',
      },
      {
        property: 'og:image',
        content: '../../assets/image/customizedBags.png',
      },
      {
        property: 'og:url',
        content: 'https://migig.shop/',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
    ]);
  }

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
