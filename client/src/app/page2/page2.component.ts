import { Component, OnInit, SimpleChanges } from '@angular/core';
import { TechService } from '../tech.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  data = {};
  details: any[];
  modalDetails = {};
  d;b;
  constructor(private techservice:TechService) { }

  ngOnInit() {
    // Fteching the data
    this.techservice.fetchdata().subscribe(
      result => {
        this.details = result;
      }
    )
  }
  
  // Inserting Age to the db
  onageSubmit(){
    this.d = this.data
    this.techservice.updatedata(this.d.name,this.data).subscribe(
      result => {
        this.techservice.fetchdata().subscribe(
          result =>{
            console.log(result);
            window.location.reload();
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

  // Delete operation
  ondeleteClick(name){
    this.techservice.deletedata(name).subscribe(
      result => {
        this.techservice.fetchdata().subscribe(
          result =>{
            console.log(result);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        )
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }


  // Edit Modal Open
  oneditClick(name){
    console.log(name);
    this.techservice.fetchdatabyname(name).subscribe(
      result => {
        this.modalDetails = result;
        console.log(result);
        console.log(this.modalDetails);
      },
      error => {
        console.log(error);
      }
    )
  }

  // Edit Operation
  oneditSubmit(name){
    this.b = this.modalDetails
    console.log(this.modalDetails);
    delete this.b._id;
    this.techservice.updatedata(name,this.b).subscribe(
      result => {
        console.log(result);
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    )
  }
  

}

