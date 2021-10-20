import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  // id:string|null = ""
  constructor(private _route:ActivatedRoute, private _myService:MyserviceService) {
    // this.id=_route.snapshot.params.id
    // this.id = _route.snapshot.paramMap.get('id');
    _myService.getSingleImg(_route.snapshot.params.id).subscribe(data=>{
      console.log(data)
    })
   }

  ngOnInit(): void {
  }

}
