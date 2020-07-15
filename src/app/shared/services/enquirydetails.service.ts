import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnquiryDetails } from 'src/app/model/EnquiryDetails.model';

@Injectable({
  providedIn: 'root'
})
export class EnquirydetailsService {

  url:string="http://localhost:8084";


  constructor(private http:HttpClient) { }

    ed:EnquiryDetails={
    cutomer_id:null,
	  customer_name:"",
    customer_dob:"",
	  customer_mobno:"",
	  customer_adharno:"",
	  customer_localaddress:"",
	  customer_permanentaddress:"",
	  customer_loanamount_required:"",
	  customer_profession:"",
	  customer_gender:"",
   }
  
 
 
    getdata(){
      return this.http.get(this.url+'/'+'getallenquirydetails');
    }

    postdata(ed:EnquiryDetails){
      return this.http.post('${this.url}'+'/'+'saveenquirydetails',ed);
    }

    updatedata(ed:EnquiryDetails){
      return this.http.put(this.url+'/'+'updateenquirydetails',ed);
    }

     deletedata(ed:EnquiryDetails){
       return this.http.delete(this.url+'/'+'deleteenquirydetails'+'/'+ed.cutomer_id);
     } 

  }
