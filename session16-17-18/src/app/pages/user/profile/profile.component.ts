import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/providers/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData :any ={}
  constructor(private _global:GlobalService) { }

  ngOnInit(): void {
    this._global.profile().subscribe(
      (data)=>{
        console.log(data)
        this.userData = data.data
        // this.userData.image = "1.jpg"
      }
    )
  }
  file:any
  onChangeFile(event:any){ this.file = event.target.files[0] }
  upimg(){  
    const myData = new FormData()
    myData.append("img",this.file,  this.file.name)

    this._global.addImg(myData).subscribe(data=>{console.log(data)}) }
}
