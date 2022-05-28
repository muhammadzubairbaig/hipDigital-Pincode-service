import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePincodeComponent } from '../get-pincode-list/update-pincode/update-pincode.component';
import { siteOptions } from 'src/app/constants';

export interface Task {
	name: string;
	completed: boolean;
	subtasks?: Task[];
}
@Component({
	selector: 'custom-pincode',
	templateUrl: './custom-pincode.component.html',
	styleUrls: ['./custom-pincode.component.scss']
})
export class CustomPincodeComponent implements OnInit {
	searchIcon = faSearch;
	checked = true;
	pincodeQuality = '';
	startSerialNum = '';
	downloadPerPincode = '';
	pincodeGroupName = '';
	characterQuality = '';
	markedasTestPincode = false;
	startDate = new Date();
	endDate = new Date();
	pricePerPinBatch = '';
	priceForBatch = '';
	invoiceNumber = '';
	siteOptions=siteOptions

	assetType: any = [
		{ value: 'track', viewValue: 'track' }
	]
	task: Task = {
		name: 'Select all',
		completed: false,
		subtasks: [
			{ name: 'Last pins', completed: false },
			{ name: 'TestSite', completed: false },
		],
	};

	allComplete: boolean = false;



	selectedSite = '1';
	constructor(private _router: Router, public dialog: MatDialog) { }

	ngOnInit(): void {

	}

	onSelectSite(e: any) {
		this.selectedSite = e.value;
		console.log(e)
	}

	updateAllComplete() {
		this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
	}

	someComplete(): boolean {
		if (this.task.subtasks == null) {
			return false;
		}
		return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
	}

	setAll(completed: boolean) {
		this.allComplete = completed;
		if (this.task.subtasks == null) {
			return;
		}
		this.task.subtasks.forEach(t => (t.completed = completed));
	}



	eventHandler(e?: any) {
		this.markedasTestPincode = e.checked;
		console.log(e, this.markedasTestPincode)
		// this.markedasTestPincode
	}

	reset() {
		this.pincodeQuality = '';
	}

	onSubmit() {
		// let body = {
		// 	checked: true,
		// 	pincodeQuality: this.pincodeQuality,
		// 	startSerialNum: this.startSerialNum,
		// 	downloadPerPincode: this.downloadPerPincode,
		// 	pincodeGroupName: this.pincodeGroupName,
		// 	characterQuality: this.characterQuality,
		// 	markedasTestPincode: false,
		// 	startDate: new Date(),
		// 	endDate: new Date(),
		// }

		// console.log(body)
		// this.reset();

		const dialogRef = this.dialog.open(UpdatePincodeComponent, {
			width: '1000px',
			data: { isOpenFrom: 'custom' }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed', result);
		});

	}
}
