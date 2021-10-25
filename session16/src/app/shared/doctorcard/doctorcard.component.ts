import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-doctorcard',
  templateUrl: './doctorcard.component.html',
  styleUrls: ['./doctorcard.component.css']
})
export class DoctorcardComponent implements OnInit {
 @Input() dData :any 
  constructor(public _global:GlobalService) { }

  ngOnInit(): void {
  }

}
