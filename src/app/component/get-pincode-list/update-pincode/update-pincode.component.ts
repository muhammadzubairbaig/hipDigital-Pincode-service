import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { siteOptions } from 'src/app/constants';
export interface PeriodicElement {
	id: number;
	name: string;
	assigned: string;

  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
	{ id: 1, name: 'test', assigned: '10'},
  ];
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
  siteOptions=siteOptions;
  
  displayedColumns: string[] = ['id', 'assigned', 'name'];
  dataSource = ELEMENT_DATA;
  constructor(private _router: Router, private route: ActivatedRoute,

    public dialogRef: MatDialogRef<any>,
	@Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {

    this.pincode = this.route.snapshot.params;
	console.log(this.dialogRef);
    console.log(this.data)
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
