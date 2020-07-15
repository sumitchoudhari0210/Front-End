import { Component, OnInit } from '@angular/core';
import { EnquiryDetails } from 'src/app/model/EnquiryDetails.model';
import { EnquirydetailsService } from 'src/app/shared/services/enquirydetails.service';

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.scss']
})
export class EnquiryDetailsComponent implements OnInit {

  constructor(public ne:EnquirydetailsService) { }

  ed:EnquiryDetails[];

  submitdata(ed:EnquiryDetails)
  {
    if(ed.cutomer_id==null)
    {
  this.ne.postdata(ed).subscribe();
    } 
    else{
     this.ne.updatedata(ed).subscribe();
   }
  }

  resetdata()
  {
    this.ne.ed=Object.assign({},null);
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.ne.getdata().subscribe((data:EnquiryDetails[])=>{
      this.ed=data;
    });

  }

  editdata(ed:EnquiryDetails){
    this.ne.ed=Object.assign({},ed);
  }

  deletedata(ed:EnquiryDetails){
    this.ne.deletedata(ed).subscribe;
  }
 




}
