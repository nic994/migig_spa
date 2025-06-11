import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private isiOS!: boolean;

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Migig Customized Gig Bags');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Design your perfect gig bag with custom  colors, and features. High-quality protection for your musical instruments, tailored to your style.',
      },
      {
        name: 'keywords',
        content:
          'migig, migig customized gig bags, migig website, customize bags, customized gig bags, migig shop, migig website, custom gig bags, personalized instrument bags, guitar case customization, premium gig bags, music accessories',
      },
      {
        name: 'author',
        content: 'MiGig Customized Gig Bags',
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

    this.isiOS =
      /iphone|ipad|ipod|Macintosh/i.test(navigator.userAgent) &&
      'ontouchend' in document;
  }

  fadedInAboutUs = false;
  fadedInContactUs = false;
  fadedInService = false;
  fadedIn = false;

  ngOnInit() {
    if (this.isiOS) {
      // Load all animations at once for iOS
      setTimeout(() => this.loadAllAtOnce(), 100);
    } else {
      // Apply the normal scroll-based animations
      setTimeout(() => this.onWindowScroll(), 50);
    }
  }

  private loadAllAtOnce() {
    this.fadedIn = true;
    this.fadedInService = true;
    this.fadedInContactUs = true;
    this.fadedInAboutUs = true;
    // this.animateCards();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    const triggerPosition = screenWidth > 768 ? 100 : 0; //cards
    const triggerPositionService = screenWidth > 700 ? 800 : 1200;
    const triggerPositionContactUs = screenWidth > 700 ? 1106 : 2100;
    const triggerPositionAboutUs = screenWidth > 700 ? 1800 : 3012;

    //console.log(scrollPosition);
    const cardsElement = document.getElementById('cardsElement');
    const serviceElement = document.getElementById('services');
    const contactUsElement = document.getElementById('contact-us');
    const aboutUsElement = document.getElementById('about-us');

    //animate cards
    if (cardsElement && scrollPosition >= triggerPosition && !this.fadedIn) {
      // this.animateCards();
      this.fadedIn = true;
    }

    // Fade in Services
    if (
      serviceElement &&
      scrollPosition >= triggerPositionService &&
      !this.fadedInService
    ) {
      this.fadedInService = true;
    }
    // Fade in Contact Us
    if (
      contactUsElement &&
      scrollPosition >= triggerPositionContactUs &&
      !this.fadedInContactUs
    ) {
      this.fadedInContactUs = true;
    }

    // Fade in About Us
    if (
      aboutUsElement &&
      scrollPosition >= triggerPositionAboutUs &&
      !this.fadedInAboutUs
    ) {
      this.fadedInAboutUs = true;
    }
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
        '../../assets/image/products/starlink.png',
        '../../assets/image/products/starlink2.png',
      ],

      title: 'Others',
    },
  ];

  aboutUsImage = '../../assets/image/abt.jpg';
}
