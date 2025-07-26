import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
   portfolio = [
    {
      id: 1,
      title: 'Airbnb Clone',
      image: 'assets/airbnb.png',
      animation: 'animate__zoomIn',
      technologies: ["Ejs", 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      description: 'A clone of the Airbnb website with features like user authentication, property listings, and booking functionality.'
    },
    {
      id: 2,
      title: 'Ev Nation Website',
      image: 'assets/evnation.png',
      animation: 'animate__zoomIn',
      technologies: ["Angular", 'TypeScript', "Bootstrap", "Mongodb", "Node.js", "Express"],
      description: 'A website for an electric vehicle rental service, showcasing available vehicles and booking options.'
    },
    {
      id: 3,
      title: 'Toyota Website clone',
      image: 'assets/toyota.png',
      animation: 'animate__zoomIn',
      technologies: ["React", "Bootstrap", "Node.js"],
      description: 'A clone of the Toyota website, featuring vehicle listings and a booking system.'
    },

    {
      id: 4,
      title: 'Little Lemon front',
      image: 'assets/lemon.png',
      animation: 'animate__zoomIn',
      technologies: ["React.js","Bootstrap","HTML", "CSS"],
      description: 'A front-end project showcasing a restaurant website with a focus on UI/UX design.'
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
