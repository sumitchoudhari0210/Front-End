import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/common.service';
import { PreviousLoanDetails } from 'src/app/model/PreviousLoanDetails.model';
import { BankDetails } from 'src/app/model/BankDetails.model';

@Component({
  selector: 'app-previous-loan-details',
  templateUrl: './previous-loan-details.component.html',
  styleUrls: ['./previous-loan-details.component.scss']
})
export class PreviousLoanDetailsComponent implements OnInit {
 

  constructor(public s:CommonService) { }

  pl:PreviousLoanDetails[];

 
  submitdata(pl:PreviousLoanDetails)
{
   if(pl.id==null)
   {
 this.s.postdata(pl).subscribe();
   } 
  else{
    this.s.updatedata(pl).subscribe();
  }
  }
 resetdata()
 {
   this.s.pl=Object.assign({},null);
 }


  

  ngOnInit() {
   console.log("previousloan--",this.pl)
    this.getAllData();
  }

  
  
  getAllData(){

    this.s.getdata().subscribe((data:PreviousLoanDetails[])=>{
      this.pl=data;
    }
    );
  }
  
 
  editdata(pl:PreviousLoanDetails){
     this.s.pl=Object.assign({},pl);
    
 
       }
       deletedata(pl:PreviousLoanDetails){
         this.s.deletedata(pl).subscribe();
         this.getAllData();
         
      }

}
