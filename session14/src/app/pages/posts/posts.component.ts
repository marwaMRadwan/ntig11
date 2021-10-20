import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    // console.log(this._data.getApiData())
    this._data.getApiData().subscribe(data=>console.log(data))
  }
}
