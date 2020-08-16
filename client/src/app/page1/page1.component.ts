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


    // Fetching the data from db
    this.techservice.fetchdata().subscribe(
      result => {
        this.details = result;
        let i;
        this.d = this.data;
        
        // Condition to check whether the name entered is already present in db
        for(i =0; i < this.details.length; i++){
          if ( this.d.name == this.details[i].name ){
            this.present = true;
            return;
          }
        }

        // If not present then the name is inserted in the db
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
