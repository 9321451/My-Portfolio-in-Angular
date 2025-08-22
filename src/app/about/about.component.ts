import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
   ngAfterViewInit(): void {
  const cards = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const animationClass = target.getAttribute('data-animation') || 'animate__fadeInUp';
        target.classList.add('animate__animated', animationClass);
        target.style.opacity = '1';
        target.style.visibility = 'visible';
        observer.unobserve(target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}
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


}
