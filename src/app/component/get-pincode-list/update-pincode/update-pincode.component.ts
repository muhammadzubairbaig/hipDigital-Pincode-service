import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'update-pincode',
  templateUrl: './update-pincode.component.html',
  styleUrls: ['../get-pincode-list.component.scss']

})
export class UpdatePincodeComponent implements OnInit {
  close = faClose;
  checked = true;
  pincodeQuality = '';
  startSerialNum = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  pincode: any;
  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  constructor(private _router: Router, private route: ActivatedRoute,

    public dialogRef: MatDialogRef<any>,


  ) { }

  ngOnInit(): void {

    this.pincode = this.route.snapshot.params;
    console.log(this.pincode)
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
    this.closeDialog();
  }

  closeDialog() {
    console.log('close')
    // this.ref.close({ isSuccess, data });
    this.dialogRef.close({ isSucess: true })
  }

}
