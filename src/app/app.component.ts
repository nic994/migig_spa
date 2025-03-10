import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Migig Customized Gig Bags';
}
