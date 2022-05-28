import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { siteOptions } from 'src/app/constants';

@Component({
  selector: 'create-pincode-serial',
  templateUrl: './create-pincode-serial.component.html',
})
export class CreatePinCodeSerialComponent implements OnInit {

  checked = true;
  pincodeQuality = '';
  startSerialNum = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  pricePerPinBatch='';
  priceForBatch='';
  invoiceNumber='';
  siteOptions=siteOptions;
  constructor(private _router: Router,) { }

  ngOnInit(): void {

  }

 

  eventHandler(e?: any) {
    this.markedasTestPincode=e.checked;
    console.log(e,this.markedasTestPincode)
    // this.markedasTestPincode
  }

  reset() {
    this.pincodeQuality = '';
  }

  onSubmit() {
    let body = {
      checked: true,
      pincodeQuality: this.pincodeQuality,
      startSerialNum: this.startSerialNum,
      downloadPerPincode: this.downloadPerPincode,
      pincodeGroupName: this.pincodeGroupName,
      characterQuality: this.characterQuality,
      markedasTestPincode: false,
      startDate: new Date(),
      endDate: new Date(),
    }

    console.log(body)
    this.reset();
  }
}
