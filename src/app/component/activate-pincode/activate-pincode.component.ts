import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { siteOptions } from 'src/app/constants';

@Component({
  selector: 'activate-pincode',
  templateUrl: './activate-pincode.component.html',
})
export class ActivatePincodeComponent implements OnInit {

  checked = true;
  pincodeQuality = '';
  startSerialNum = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  siteOptions=siteOptions;
  constructor(private _router: Router,) { }

  ngOnInit(): void {

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
