import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
muSlides = [
  'assets/images/1.jpg',
  "assets/images/2.jpg",
  "assets/images/3.jpg"
]
  constructor() { }

  ngOnInit(): void {
  }

}
