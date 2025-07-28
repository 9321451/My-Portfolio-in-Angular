import { Component } from '@angular/core';
import { education } from '../data/education-data'; // Assuming you have a data file for education
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-education',
  imports: [NgFor, RouterModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
   educationList = education;

   ngAfterViewInit(): void {
  const cards = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.getAttribute('data-animation');
        entry.target.classList.add('animate__animated', animationClass || 'animate__fadeInUp');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}
}
