import { Injectable } from '@angular/core';
import { GaurantorDetails } from 'src/app/model/Gaurantor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GaurantorDetailsService {

  url:string="http://localhost:9797"

  constructor(private http: HttpClient) {}


  gd:GaurantorDetails = {
    
    id:null,
    gname:"",
    gdob:"",
    grel:"",
    gmobno:"",
    gAdhar:"",
    gmortageDetails:"",
    gjobdetails:"",
    glocalAddr:"",
    gPermanentAddr:"",
  }

  getdata()
  {
    console.log("get data called---")
    return this.http.get(this.url+'/'+'gaurantordetails');
  }
  postdata(gd:GaurantorDetails){
 return this.http.post(this.url+'/'+'postgaurantordetails',gd);
  }
  updatedata(gd:GaurantorDetails){
    return this.http.put(this.url+"/"+'gaurantordetailsupdate',gd);
  }
  deletedata(gd:GaurantorDetails){
    return this.http.delete(this.url+"/"+gd.id);
  }
 
}
