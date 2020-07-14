import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PreviousLoanDetails } from '../model/PreviousLoanDetails.model';
import { BankDetails } from '../model/BankDetails.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url:string="http://localhost:8084";
  
  constructor(private http:HttpClient) { }

  
  bkd:BankDetails={

    bid:null,
   bankAccountNo:"",
    bankAccountHolderName:"",
    status:null
  }

  pl:PreviousLoanDetails={

    id:null,
    remainingAmount:null,
    remainingEmi:null,
    bankdetails:this.bkd
  
  
  }

  

  getdata(){

    //return this.http.get(this.url);
    console.log("get data called--")
    return this.http.get(this.url+'/'+'PreloanDetails');
  }

  postdata(pl:PreviousLoanDetails)
   {
   //  return this.http.post(this.url,stu);
   return this.http.post(this.url+'/'+'PreloanDetails',pl);
   }
   
   updatedata(pl:PreviousLoanDetails)
   {
   return this.http.put(this.url+"/"+'PreloanDetails',pl);
  }
   deletedata(pl:PreviousLoanDetails)
   {
     return this.http.delete(this.url+"/"+pl.id);
   }
}
