import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { AnnouncementComponent } from './announcement/announcement.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    RouterModule,
    FooterComponent,
    AnnouncementComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private title: Title) {
    this.title.setTitle('Migig Customized Gig Bags');
  }
}
