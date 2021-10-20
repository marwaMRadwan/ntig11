import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images:any[] =[]
  constructor(private _myService: MyserviceService) { }

  ngOnInit(): void {
    this._myService.getPhotos().subscribe(d=>{
      this.images = d
      console.log(d)
    })
  }

}
