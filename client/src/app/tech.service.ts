import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private addDataurl = "http://localhost:3000/control/addData";
  private updatedataurl = "http://localhost:3000/control/update/";
  private deleteDataurl = "http://localhost:3000/control/del/";
  private fetchDataurl = "http://localhost:3000/control";
  private fetchDataidurl = "http://localhost:3000/control"

  constructor(private http: HttpClient) { }

  addData(data){
    return (this.http.post<any>(this.addDataurl,data));
  }

  updatedata(name,data){
    return (this.http.put<any>(this.updatedataurl+name,data));
  }

  deletedata(name,data){
    return (this.http.delete<any>(this.deleteDataurl+name,data));
  }

  fetchdata(){
    return (this.http.get<any>(this.fetchDataurl));
  }

  fetchdatabyname(name){
    return (this.http.get<any>(this.fetchDataidurl,name));
  }
}
