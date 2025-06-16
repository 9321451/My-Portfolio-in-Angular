import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [CommonModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
     skills = [
    {
    name: 'Angular',
    icon: 'assets/angular.png',
    description: 'Angular is a powerful TypeScript-based frontend framework for building dynamic SPAs.',
    animation: 'animate__zoomInLeft'
  },
  {
    name: 'Node.js',
    icon: 'assets/node.js.png',
    description: 'Node.js is a runtime environment that lets you run JavaScript server-side efficiently.',
    animation: 'animate__zoomInRight'
  },
  {
    name: 'Express.js',
    icon: 'assets/express.png',
    description: 'Express.js is a minimal and flexible Node.js web framework for building APIs and apps.',
    animation: 'animate__zoomInLeft'
  },
  {
    name: 'MongoDB',
    icon: 'assets/mongodb.png',
    description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.',
    animation: 'animate__zoomInRight'
  }
  ];

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
