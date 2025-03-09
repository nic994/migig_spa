import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCardFadein]',
  standalone: true,
})
export class CardFadeinDirective implements OnInit {
  private fadedIn = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.onWindowScroll();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    const triggerPosition = screenWidth > 768 ? 100 : 1;

    if (scrollPosition >= triggerPosition && !this.fadedIn) {
      this.animateCards();
      this.fadedIn = true;
    }
  }

  private animateCards() {
    const cards = this.el.nativeElement.querySelectorAll('.card');
    cards.forEach((card: HTMLElement, index: number) => {
      const delay = index * 200;
      setTimeout(() => {
        this.renderer.addClass(card, 'fade-in');
      }, delay);
    });
  }
}
