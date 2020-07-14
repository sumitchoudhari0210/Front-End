import { Component, OnInit } from '@angular/core';
import { DocumentdetailscommonServiceService } from 'src/app/shared/documentdetailscommon-service.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {

  constructor(private s:DocumentdetailscommonServiceService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  addressProof:any;
  bankStatement:any;
  itrFile:any;
  photo:any;
  postDatedCheck:any;
  signature:any;
  thumb:any;
  bankcheck:any;
  salarySlip:any;
  adharcard:any;
  pancard:any;
  previousLoanStatement:any;

  selectAddressProof(event):void{
    console.log(event);
    this.addressProof=event.target.files[0];
    }
  
  selectBankStatement(event):void{
    console.log(event);
    this.bankStatement=event.target.files[0];
    }
  
  selectItrFile(event):void{
    console.log(event);
    this.itrFile=event.target.files[0];
    }

  selectphoto(event):void{
   console.log(event);
   this.photo=event.target.files[0];
      }

  selectPostDatedCheck(event):void{
   console.log(event);
   this.postDatedCheck=event.target.files[0];
     }

selectsignature(event):void{
  console.log(event);
  this.signature=event.target.files[0];
   }

selectThumb(event):void{
  console.log(event);
  this.thumb=event.target.files[0];
   }

selectBankcheck(event):void{
  console.log(event);
  this.bankcheck=event.target.files[0];
   }

selectSalarySlip(event):void{
 console.log(event);
  this.salarySlip=event.target.files[0];
   }

selectAdharcard(event):void{
  console.log(event);
  this.adharcard=event.target.files[0];
    }

selectPancard(event):void{
  console.log(event);
  this.pancard=event.target.files[0];
   }

selectPreviousLoanStatement(event):void{
  console.log(event);
  this.previousLoanStatement=event.target.files[0];
    }

    saveDocuments(){
      console.log("HELLO.......");
      console.log("TS.."+this.addressProof+this.bankStatement+this.itrFile+this.photo+this.postDatedCheck+this.signature
      +this.thumb+this.bankcheck+this.salarySlip+this.adharcard+this.pancard+this.previousLoanStatement);
      const docs=new FormData();
      docs.append("addressProof",this.addressProof);
      docs.append("bankStatement",this.bankStatement);
      docs.append("itrFile",this.itrFile);
      docs.append("photo",this.photo);
      docs.append("postDatedCheck",this.postDatedCheck);
      docs.append("signature",this.signature);
      docs.append("thumb",this.thumb);
      docs.append("bankcheck",this.bankcheck);
      docs.append("salarySlip",this.salarySlip);
      docs.append("adharcard",this.adharcard);
      docs.append("pancard",this.pancard);
      docs.append("previousLoanStatement",this.previousLoanStatement);
     this.s.saveDocuments(docs).subscribe();
   }
   documents:any;

   getDocuments(){
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    console.log("get Called");
    this.s.getAllDocuments().subscribe(data=>{this.documents =data,console.log(data)});
  }

  reset(){

  }
  deleteDocuments(id){

  }

}
