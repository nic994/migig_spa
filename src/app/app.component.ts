import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
}
