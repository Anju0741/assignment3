import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }




  cimages = [{
    id: 1,
    alt: 'india',
    src: 'https://www.smartertravel.com/wp-content/uploads/2016/05/Jodhpur.jpg'
  }, {
    id: 2,
    alt: 'indiaa',
    src: 'https://www.tripsavvy.com/thmb/d8MUgbOmy5O36TG1cjOA-jWl7Ns=/2128x1409/filters:no_upscale():max_bytes(150000):strip_icc()/shore-temple-640319518-58e3eaf25f9b58ef7e113e1f.jpg'
  }, {
    id: 3,
    alt: 'indiaaa',
    src: 'https://www.tripsavvy.com/thmb/YINWe-F3JNe10uw7eLQ_jBRVau4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-936287480-5b44272346e0fb0037a4708e.jpg'
  }

  ];
}