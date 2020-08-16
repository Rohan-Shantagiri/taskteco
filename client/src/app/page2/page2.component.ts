import { Component, OnInit } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  data = {};
  name : any[];
  constructor(private techservice:TechService) { }

  ngOnInit() {

    this.techservice.fetchdata().subscribe(
      result => {
        console.log(result);
        this.name = result;
      }
    )
  }

  

  onageSubmit(){
    console.log(this.data.name);
    this.techservice.updatedata(this.data.name,this.data).subscribe(
      result => {
        console.log(this.name)
        this.techservice.fetchdata().subscribe(
          result =>{
            console.log(result);
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error);
      }
    )
  }

}
