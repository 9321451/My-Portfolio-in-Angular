import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
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
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
  }

  formData = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  sendEmail(form: NgForm) {
  if (form.invalid) {
    form.control.markAllAsTouched(); // highlight fields
    alert("⚠️ Please fill all required fields before sending.");
    return;
  }

  // ✅ Only send if valid
  emailjs.send(
    'service_bzl0bwm',
    'template_5axl2pl',
    this.formData,
    'C4oexlglH1oUfPoH4'
  ).then(response => {
    console.log('SUCCESS!', response.status, response.text);
    alert("✅ Your message has been sent!");
    form.resetForm(); // clear form after success
  }, err => {
    console.error('FAILED...', err);
    alert("❌ Oops, something went wrong.");
  });
}

}
