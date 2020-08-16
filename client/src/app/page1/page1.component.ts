import { Component, OnInit } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  data = {};
  constructor(private techservice:TechService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.techservice.addData(this.data).subscribe(
      result => {
        console.log(this.data);
      },
      error => {
        console.log(error);
      }
    )
  }

}
