import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-floating-icons',
  imports: [CommonModule],
  templateUrl: './floating-icons.component.html',
  styleUrl: './floating-icons.component.css'
})
export class FloatingIconsComponent {
   showResume = false;

  toggleResumeIcon() {
    this.showResume = !this.showResume;
  }
}
