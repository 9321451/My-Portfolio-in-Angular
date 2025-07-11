import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Offcanvas} from 'bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   activeSection: string = 'home';

  constructor(private router: Router) {}

  //scrollToSection(fragment: string) {
    //this.router.navigate([], { fragment }).then(() => {
      //const element = document.getElementById(fragment);
      //if (element) {
        //element.scrollIntoView({ behavior: 'smooth' });
        //this.activeSection = fragment;
      //}
    //});
  //}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
      const id = section.getAttribute('id');
      if (
        id &&
        section.offsetTop <= scrollPos &&
        (section.offsetTop + section.offsetHeight) > scrollPos
      ) {
        this.activeSection = id;
      }
    });
  }

  @ViewChild("mobileoffcanvas",{static: false}) mobileOffcanvas!: ElementRef;

  closeOffcanvas(){
    const offcanvasElement = document.getElementById('mobileMenu');
    if(offcanvasElement){
    const bsOffcanvas = Offcanvas.getInstance(offcanvasElement);
    if(bsOffcanvas){
      bsOffcanvas.hide();
    }
  }
  }
  
}
