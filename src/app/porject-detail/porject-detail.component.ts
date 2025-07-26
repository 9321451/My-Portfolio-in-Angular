import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolio } from '../data/portfolio-data'; // Assuming portfolio data is exported from this
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-porject-detail',
  imports: [NgFor],
  templateUrl: './porject-detail.component.html',
  styleUrl: './porject-detail.component.css'
})
export class PorjectDetailComponent implements OnInit {

  project: any;
  selectedImageIndex: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.project = portfolio.find(p => p.id === id);
  }

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }


}
