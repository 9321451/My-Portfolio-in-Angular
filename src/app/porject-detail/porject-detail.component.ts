import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { portfolio } from '../data/portfolio-data'; // Assuming portfolio data is exported from this
import { NgFor, NgIf } from '@angular/common';
import Swiper from 'swiper/bundle'; // Import Swiper bundle
@Component({
  selector: 'app-porject-detail',
  imports: [NgFor, NgIf],
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

  ngAfterViewInit() {
  setTimeout(() => {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  }, 0);
}

  selectImage(index: number) {
    this.selectedImageIndex = index;
  }


}