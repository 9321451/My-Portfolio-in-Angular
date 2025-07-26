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
}
