import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-pincode',
  templateUrl: './create-pincode.component.html',
})
export class CreatePinCodeComponent implements OnInit {

  checked = true;
  pincodeQuality = '';
  invoiceNumber = '';
  priceForBatch = '';
  pricePerPinBatch = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor(private _router: Router,) { }

  ngOnInit(): void {

  }

  onBack(): void {
    this._router.navigate(['/flexy/home']);
  }

  reset() {
    this.pincodeQuality = '';
  }

  onSubmit() {
    let body = {
      checked: true,
      pincodeQuality: this.pincodeQuality,
      invoiceNumber: this.invoiceNumber,
      priceForBatch: this.priceForBatch,
      pricePerPinBatch: this.pricePerPinBatch,
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
