import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VehicleDetails } from 'src/app/model/VehicleDetails.model';

@Injectable({
  providedIn: 'root'
})
export class VehiclecommonService {
  url:string="http://localhost:8084";
  constructor(private http:HttpClient) { }

  vehicle:VehicleDetails=
{
    id:null,
    vehicleRegistrationNo:"",
    vehicleEngineNo:"",
    vehicleChassisNo:"",
    vehicleType:"",
    vehicleCompany:"",
    vehicleModel:"",
    vehicleModelNo:null,
    vehicleColor:"",
    actualPrice:null,
    fuelType:""
};
getdata()
{
  console.log("Get data called --")
  return this.http.get(this.url+"/vehicledetails");
}

postdata(vehicle:VehicleDetails)
{
  return this.http.post(this.url+"/postvehicledetails",vehicle);
}

updatedata(vehicle:VehicleDetails)
{
  return this.http.put(this.url+"/updatevehicledetails",vehicle);
}
  
  deletedata(vehicle:VehicleDetails)
  {
    return this.http.delete(this.url+"/deletevehicledetails.id");
  }
}