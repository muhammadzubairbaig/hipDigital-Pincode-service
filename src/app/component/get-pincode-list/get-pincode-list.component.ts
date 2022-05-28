import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface PeriodicElement {
  id: number;
  name: string;
  work: string;
  project: string;
  priority: string;
  selectedList: boolean;
  budget: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'test', work: '10', project: '3', priority: '2/22/2008 12:32:22 PM', selectedList: false, budget: '21' },
  { id: 2, name: 'test 2', work: '10', project: '3', priority: '2/22/2008 12:32:22 PM', selectedList: false, budget: '21' },
];
import { faDownload, faEdit, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { siteOptions } from 'src/app/constants';
import { UpdatePincodeComponent } from './update-pincode/update-pincode.component';

@Component({
  selector: 'get-pincode-list',
  templateUrl: './get-pincode-list.component.html',
  styleUrls: ['./get-pincode-list.component.scss']
}) 
export class GetPincodeListComponent implements OnInit {
  searchIcon = faSearch;
  plusIcon = faPlus;
  editIcon= faEdit;
  downloadIcon=faDownload;
  selectedList = false;
  pincodeQuality = '';
  startSerialNum = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  searchPincode = '';
  siteOptions=siteOptions;
  displayedColumns: string[] = ['id', 'assigned', 'name', 'priority', 'budget', 'actions'];
  dataSource = ELEMENT_DATA;
  pincodeList: string[] = [];
  constructor(private _router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

  }

 

  reset() {
    this.pincodeQuality = '';
  }

  onSubmit() {
   
    const dialogRef = this.dialog.open(UpdatePincodeComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  
    // let body = {
    //   checked: true,
    //   pincodeQuality: this.pincodeQuality,
    //   startSerialNum: this.startSerialNum,
    //   downloadPerPincode: this.downloadPerPincode,
    //   pincodeGroupName: this.pincodeGroupName,
    //   characterQuality: this.characterQuality,
    //   markedasTestPincode: false,
    //   startDate: new Date(),
    //   endDate: new Date(),
    // }

    // console.log(body)
    // this.reset();
  }

  onSearchPincode() {
    let response = 'true';
    this.pincodeList.push(response);
  }

  onEditPincode(element:any){
    // this._router.navigate([`get-pincode-list/${element.id}`]);
    const dialogRef = this.dialog.open(UpdatePincodeComponent, {
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
  }

  onDownloadPincode(element?:any){

  }

  setAll(completed: boolean, element?: any) {
    this.dataSource.filter(t => (t.id == element.id))[0].selectedList = completed;
  }

}
