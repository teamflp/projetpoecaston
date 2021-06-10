import { Directive, HostListener, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {
  private position = 167;
  constructor(private elementView: ElementRef) {
      if (document.documentElement.scrollTop > this.position || document.body.scrollTop > this.position){
           this.elementView.nativeElement.style.opacity = 1;
      } else {
           this.elementView.nativeElement.style.opacity = 0;
      }
  }

  @HostListener("click") onclick() {
    document.body.scrollTop = 0; // Pour Safari
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth" // Fluidité du scrolling
    }); // Pour Chrome, Firefox, IE and Opera
  }

  @HostListener("window:scroll") scrolling() {
    if(document.documentElement.scrollTop > this.position || document.body.scrollTop > this.position) {
      this.elementView.nativeElement.style.opacity = 1;
    } else {
      this.elementView.nativeElement.style.opacity = 0;
    }
  }
}
