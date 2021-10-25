import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {
  @Input() y:number=0
  constructor() { }

  ngOnInit(): void {
  }

}
