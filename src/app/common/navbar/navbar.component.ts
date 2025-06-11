import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToSection(sectionId: string, offset = 50) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset =
        element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
}
