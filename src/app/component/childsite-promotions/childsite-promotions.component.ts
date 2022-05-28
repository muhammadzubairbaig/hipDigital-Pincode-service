import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { siteOptions } from 'src/app/constants';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface childSites {
  name: string;
}

@Component({
  selector: 'childsite-promotions',
  templateUrl: './childsite-promotions.component.html',
  styleUrls: ['./childsite-promotions.component.scss'],
})
export class ChildSitePromotionsComponent implements OnInit {

  checked = true;
  pincodeQuality = '';
  startSerialNum = '';
  downloadPerPincode = '';
  pincodeGroupName = '';
  characterQuality = '';
  markedasTestPincode = false;
  startDate = new Date();
  endDate = new Date();
  siteOptions = siteOptions;
  constructor(private _router: Router,) { }

  todo = [    'AirWickTarget',
  'Alto',
  'angelanutron',
  'anupsnipptest',
  'baddy',
  'bankofamerica',
  'Barefoot',
  'BarnsAndNoble',
  'BCHydroLoyalty',]

  done:any = [];
  childSitesOptions: childSites[] = [
    {name: 'Alto'},
    {name: 'anupsnipptest'},
    {name: 'angelanutron'},
    {name: 'bankofamerica'},
    {name: 'BCHydroLoyalty'},
  ];

  

  ngOnInit(): void {

  }



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
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
