import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentdetailscommonServiceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:9090";
  
  saveDocuments(docs){
    console.log("Service.."+docs);
   return this.http.post(this.url+"/documentDetails",docs);
  }

  getAllDocuments(){
    return this.http.get(this.url+"/allDocumentDetails");
  }
}
