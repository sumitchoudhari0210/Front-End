import { Component, OnInit } from '@angular/core';
import { GaurantorDetails } from 'src/app/model/Gaurantor.model';
import { GaurantorDetailsService } from 'src/app/shared/services/gaurantor-details.service';

@Component({
  selector: 'app-gaurantor-details',
  templateUrl: './gaurantor-details.component.html',
  styleUrls: ['./gaurantor-details.component.scss']
})
export class GaurantorDetailsComponent implements OnInit {

 
  constructor(public s: GaurantorDetailsService) {}

  gd:GaurantorDetails[];
   
  submitdata(gd:GaurantorDetails)
  {
   if(gd.id==null)
   {
    this.s.postdata(gd).subscribe();

   }
   else{

    this.s.updatedata(gd).subscribe();
   }

  }
  resetdata()
  {
    this.s.gd=Object.assign({},null);
  }

  ngOnInit() {

    console.log("gaurantor details--",this.gd);
    this.getAllData();
  }
getAllData(){

  this.s.getdata().subscribe((data:GaurantorDetails[])=>{

    this.gd=data;
  });
}
 editdata(gd:GaurantorDetails){
   this.s.gd=Object.assign({},gd);
 }

 deletedata(gd:GaurantorDetails){

  this.s.deletedata(gd).subscribe();
 }

}
