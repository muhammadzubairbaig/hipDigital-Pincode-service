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
  budget:string
  actions1: string;
  actions2: string;
  actions3: string;
  actions4: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'test', work: '10', project: '3', priority: '2/22/2008 12:32:22 PM', selectedList: false, budget: '21',actions1: '21',actions2: '21',actions3: '21',actions4: '21' },
  // { id: 2, name: 'test 2', work: '10', project: '3', priority: '2/22/2008 12:32:22 PM', selectedList: false, budget: '21' },
];
import { faDownload, faEdit, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { siteOptions } from 'src/app/constants';

@Component({
  selector: 'pincode-detail',
  templateUrl: './pincode-detail.component.html',
  styleUrls: ['./pincode-detail.component.scss']
}) 
export class PincodeDetailComponent implements OnInit {
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
  displayedColumns: string[] = [ 'id','pincode', 'type', 'createdDate', 'orignalDownload', 'remainingDonwload','startDate','expiryDate','isQaPin','isDeleted','redemptionDate','expired','isRefunded','promotion','childSiteName','pincodeGroupName'];
  dataSource = ELEMENT_DATA;
  
  pincodeList: string[] = [];
  constructor(private _router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

  }

 

  reset() {
    this.pincodeQuality = '';
  }

  onSubmit() {

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
  
  }

  onDownloadPincode(element?:any){

  }

  setAll(completed: boolean, element?: any) {
    this.dataSource.filter(t => (t.id == element.id))[0].selectedList = completed;
  }

}
