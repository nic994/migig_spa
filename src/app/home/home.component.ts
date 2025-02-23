import { Component } from '@angular/core';
import { CardFadeinDirective } from '../directives/card-fadein.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardFadeinDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
