import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appAboutusFadein]',
  standalone: true,
})
export class AboutusFadeinDirective {
  fadedIn = false;
  firstCardScrollPosition = 0; // Initialize with the default value

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.onWindowScroll();
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const screenWidth = window.innerWidth;
    const triggerPosition = screenWidth > 2900 ? 2005 : 0;
    console.log(scrollPosition);
    if (scrollPosition >= triggerPosition && !this.fadedIn) {
      this.fadeInCard(this.el.nativeElement, 10); // Add a delay of 10ms
      this.fadedIn = true;
    }
  }
  private fadeInCard(cardElement: HTMLElement | null, delay: number) {
    if (cardElement) {
      setTimeout(() => {
        this.renderer.addClass(cardElement, 'fade-in');
      }, delay);
    }
  }
}
