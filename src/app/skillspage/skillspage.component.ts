import { Component } from '@angular/core';

@Component({
  selector: 'app-skillspage',
  imports: [],
  templateUrl: './skillspage.component.html',
  styleUrl: './skillspage.component.css', // Use this if you want global styles to apply
})
export class SkillspageComponent {
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


}
