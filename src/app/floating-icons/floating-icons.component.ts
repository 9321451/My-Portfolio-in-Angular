import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-floating-icons',
  imports: [CommonModule],
  templateUrl: './floating-icons.component.html',
  styleUrl: './floating-icons.component.css'
})
export class FloatingIconsComponent {
  animationClass = 'jump-loop'; // start jumping on load
showResume = false;

toggleResumeIcon(): void {
  this.showResume = !this.showResume;

  // Stop the jump when user interacts (optional)
  if (this.showResume) {
    this.animationClass = ''; // stop jumping after click
  }
}

isDarkMode = false;

toggleDarkMode(): void {
  this.isDarkMode = !this.isDarkMode;
  document.body.classList.toggle('dark-theme', this.isDarkMode);
}

}
