import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-find-vaccine-slot',
  templateUrl: './find-vaccine-slot.component.html',
  styleUrls: ['./find-vaccine-slot.component.css'],
  providers: [DatePipe]
})
export class FindVaccineSlotComponent implements OnInit {

  constructor(private dataservice:DataService,private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
  
 
    pinCode=""
    searchdate=""
    datas=""
  findByPin(){
     
     document.getElementById("searDiv").setAttribute("style", "display:block;")
      let pinCode=this.pinCode;
      let searchdate= this.datePipe.transform(this.searchdate, 'dd-MM-yyyy');
      this.dataservice.findByPin(pinCode,searchdate)
      .subscribe((results:any)=>{
        if(results){
          console.log(results);
        this.datas = results.sessions
        }
       
      },
    )
    
  }
}
