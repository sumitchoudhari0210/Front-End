import { Component, OnInit } from '@angular/core';
import { VehiclecommonService } from 'src/app/shared/services/vehiclecommon.service';
import { VehicleDetails} from 'src/app/model/VehicleDetails.model';


@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.scss']
})
export class VehicleDataComponent implements OnInit {

  constructor(public s:VehiclecommonService) { }
  vehicle:VehicleDetails[];
 
  submitdata(vehicle:VehicleDetails) 
  {
    if(vehicle.id==null)
    {
      this.s.postdata(vehicle).subscribe();
    }
    else
    {
      this.s.updatedata(vehicle).subscribe();
    }
  }

  resetdata()
  {
    this.s.vehicle=Object.assign({},null);
  }

  ngOnInit(){
    this.getAllData();
  }

  getAllData()
  {
    this.s.getdata().subscribe((data:VehicleDetails[])=>{this.vehicle=data;});
  }

  editdata(vehicle:VehicleDetails)
  {
    this.s.vehicle=Object.assign({},vehicle);
  }

  deletedata(vehicle:VehicleDetails)
  {
    this.s.deletedata(vehicle).subscribe();
  }
}

