import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CustomerBankDetails } from 'src/app/model/customerbankdetails.module';



@Injectable({
  providedIn: 'root'
})
export class CustomerbankdetailsService {

  url:string="http://localhost:8084/";
  constructor(private http:HttpClient) { }
  cbd:CustomerBankDetails={
    id:null,
    customerBankAccountNo:"",
    customerBankAccountHolderName:"",
    status:null,

  }

  getdata()
  {
    console.log("get data called--")
    return this.http.get(this.url+'/'+'customerbankdetails');
  }
  postdata(cbd:CustomerBankDetails)
  {
    return this.http.post(this.url+'/'+'postcustomerbankdetails',cbd);
   }
   updatedata(cbd:CustomerBankDetails)
  {
    return this.http.put(this.url+"/"+'updatecustomerbankdetails',cbd);
   }
   deletedata(cbd:CustomerBankDetails)
   {
    return this.http.delete(this.url+"/"+'deletecustomerbankdetails'+cbd.id);
   }
}
