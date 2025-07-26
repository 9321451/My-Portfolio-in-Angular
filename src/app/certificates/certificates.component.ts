import { Component } from '@angular/core';
import { certificates } from '../data/certificates-data'; // Assuming you have a data file for certificates
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-certificates',
  imports: [NgFor, NgIf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
   certificatesList = certificates;
}
