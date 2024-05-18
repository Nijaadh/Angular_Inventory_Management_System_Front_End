import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent implements OnInit{

  menuActive: boolean = false;

  // constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.toggleMenu();
  }
  // menuActive: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const navLinks = this.el.nativeElement.querySelector('.nav-links');
    if (this.menuActive) {
      this.renderer.addClass(navLinks, 'active');
    } else {
      this.renderer.removeClass(navLinks, 'active');
    }
  }

}
