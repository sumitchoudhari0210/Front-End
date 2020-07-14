import { Component, OnInit } from '@angular/core';
import { CustomerbankdetailsService } from 'src/app/shared/services/customerbankdetails.service';
import { CustomerBankDetails } from 'src/app/model/customerbankdetails.module';


@Component({
  selector: 'app-customerbankdetails',
  templateUrl: './customerbankdetails.component.html',
  styleUrls: ['./customerbankdetails.component.scss']
})
export class CustomerbankdetailsComponent implements OnInit {

  constructor(public s:CustomerbankdetailsService) { }

  cbd:CustomerBankDetails[];
  ngOnInit(): void {
  this.s.getdata().subscribe((data:CustomerBankDetails[])=>{
    this.cbd=data;
  });
  }

  editdata(cbd:CustomerBankDetails){
     this.s.cbd=Object.assign({},cbd);
       }
       deletedata(cbd:CustomerBankDetails){

        
         this.s.deletedata(cbd).subscribe();
     }
  submitdata(cbd:CustomerBankDetails)
   {
     if(cbd.id==null)
    {
   this.s.postdata(cbd).subscribe();
    } 
     else{
      this.s.updatedata(cbd).subscribe();
    }
   }
   resetdata()
   {
     this.s.cbd=Object.assign({},null);
   }

}
