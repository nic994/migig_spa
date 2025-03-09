import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAboutusFadein]',
  standalone: true,
})
export class AboutusFadeinDirective {
  fadedInAboutUs = false;
  fadedInContactUs = false;
  fadedInService = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.onWindowScroll();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;

    const triggerPositionService = screenWidth > 700 ? 800 : 1200;
    const triggerPositionContactUs = screenWidth > 700 ? 1106 : 2100;
    const triggerPositionAboutUs = screenWidth > 700 ? 1800 : 3012;

    console.log(scrollPosition);
    const serviceElement = document.getElementById('services');
    const contactUsElement = document.getElementById('contact-us');
    const aboutUsElement = document.getElementById('about-us');

    // Fade in Services

    if (
      serviceElement &&
      scrollPosition >= triggerPositionService &&
      !this.fadedInService
    ) {
      this.fadeInCard(serviceElement, 10);
      this.fadedInService = true;
    }
    // Fade in Contact Us
    if (
      contactUsElement &&
      scrollPosition >= triggerPositionContactUs &&
      !this.fadedInContactUs
    ) {
      this.fadeInCard(contactUsElement, 10);
      this.fadedInContactUs = true;
    }

    // Fade in About Us

    if (
      aboutUsElement &&
      scrollPosition >= triggerPositionAboutUs &&
      !this.fadedInAboutUs
    ) {
      this.fadeInCard(aboutUsElement, 10);
      this.fadedInAboutUs = true;
    }
  }

  private fadeInCard(cardElement: HTMLElement, delay: number) {
    if (cardElement) {
      setTimeout(() => {
        console.log(cardElement.id);
        this.renderer.addClass(cardElement, 'fade-in');
      }, delay);
    }
  }
}
