import { Component, OnInit } from '@angular/core';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  data = {};
  d;
  present:boolean = false;
  details: any[];
  constructor(private techservice:TechService) { }

  ngOnInit() {
  }

  onSubmit(){

    this.techservice.fetchdata().subscribe(
      result => {
        this.details = result;
        let i;
        this.d = this.data;
        
        // if(this.details[i] != null){
        for(i =0; i < this.details.length; i++){
          if ( this.d.name == this.details[i].name ){
            this.present = true;
            return;
          }
        }
      // }
        this.techservice.addData(this.data).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
        )
      }
    )
    }
}
