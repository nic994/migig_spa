import { Component } from '@angular/core';
import { CardFadeinDirective } from '../directives/card-fadein.directive';
import { GoogleMapsModule } from '@angular/google-maps';
import { AboutusFadeinDirective } from '../directives/aboutus-fadein.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardFadeinDirective, GoogleMapsModule, AboutusFadeinDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
