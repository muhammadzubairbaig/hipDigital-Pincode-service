import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePincodeComponent } from '../get-pincode-list/update-pincode/update-pincode.component';

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
	siteOptions: any[] = [
		{ value: "-1", viewValue: '- select site -' },
		{ value: "14021", viewValue: '3MStore' },
		{ value: "2101", viewValue: '513806rewards.snipprewards.com' },
		{ value: "745", viewValue: 'AirWickTarget' },
		{ value: "1026", viewValue: 'Alto Productions' },
		{ value: "2019", viewValue: 'angelanutron.hipdigital.com' },
		{ value: "2097", viewValue: 'anupsnipptest.snipprewards.com' },
		{ value: "13010", viewValue: 'baddy.hiprewards.com:81' },
		{ value: "170", viewValue: 'bankofamerica.hipdigital.com' },
		{ value: "14020", viewValue: 'Barefoot' },
		{ value: "10", viewValue: 'BarnsAndNoble' },
		{ value: "14009", viewValue: 'BCHydroLoyalty' },
		{ value: "2085", viewValue: 'blackanddecker.snipprewards.com' },
		{ value: "14012", viewValue: 'BlueChip' },
		{ value: "723", viewValue: 'Bonine' },
		{ value: "13018", viewValue: 'CarforSale.hiprewards.com:81' },
		{ value: "14007", viewValue: 'CatalystDemo' },
		{ value: "2040", viewValue: 'cc.hiprewards.com' },
		{ value: "1021", viewValue: 'chaoticmoon.com' },
		{ value: "729", viewValue: 'cheeseheads.hiprewards.com' },
		{ value: "190", viewValue: 'choicehotels.hipdigital.com' },
		{ value: "2051", viewValue: 'chroz.hiprewards.com' },
		{ value: "13040", viewValue: 'CinemaNowFullSite.snipprewards.com' },
		{ value: "14015", viewValue: 'Clorox Reward' },
		{ value: "2029", viewValue: 'clorox.hipdigital.com' },
		{ value: "725", viewValue: 'coffee-mate.hiprewards.com' },
		{ value: "15001", viewValue: 'Coke Argentina' },
		{ value: "15010", viewValue: 'Coke Argentina US' },
		{ value: "15002", viewValue: 'Coke Brazil' },
		{ value: "15003", viewValue: 'Coke Chile' },
		{ value: "15004", viewValue: 'Coke Colombia' },
		{ value: "15009", viewValue: 'Coke Ecuador' },
		{ value: "15005", viewValue: 'Coke Japan' },
		{ value: "15006", viewValue: 'Coke Mexico' },
		{ value: "15008", viewValue: 'Coke Peru' },
		{ value: "15007", viewValue: 'Coke Saudi Arabia' },
		{ value: "14018", viewValue: 'Conagra Store' },
		{ value: "722", viewValue: 'crush.hiprewards.com' },
		{ value: "728", viewValue: 'crushmovie.hiprewards.com' },
		{ value: "13000", viewValue: 'cvsrewards.hiprewards.com:81' },
		{ value: "711", viewValue: 'danerewards.hipdigitalstore.com' },
		{ value: "20", viewValue: 'DanerewardsApplicationStore' },
		{ value: "2017", viewValue: 'danestg.hipdigital.com' },
		{ value: "14001", viewValue: 'DefaultWebAPISite' },
		{ value: "2084", viewValue: 'dgdrpepperpoints.snipprewards.com' },
		{ value: "13045", viewValue: 'dinosaurs.snipprewards.com:81' },
		{ value: "560", viewValue: 'discounttrax.hipdigitalstore.com' },
		{ value: "9901", viewValue: 'dme.hipdigital.com' },
		{ value: "707", viewValue: 'doit.com' },
		{ value: "114", viewValue: 'downloads.myplaydigital.com' },
		{ value: "22", viewValue: 'DuracellApplicationStore' },
		{ value: "712", viewValue: 'duracellflashrewards.hipdigitalstore.com' },
		{ value: "702", viewValue: 'dynamic.hipdigital.com' },
		{ value: "703", viewValue: 'dynamictest.hipdigital.com' },
		{ value: "732", viewValue: 'entry.hiprewards.com' },
		{ value: "2000", viewValue: 'ertac.hiprewards.com' },
		{ value: "2020", viewValue: 'FakeDaneTargetNutronStore' },
		{ value: "562", viewValue: 'fbcredits.hipdigital.com' },
		{ value: "13027", viewValue: 'FrostforSale.hiprewards.com:81' },
		{ value: "13016", viewValue: 'froyo.hiprewards.com:81' },
		{ value: "2098", viewValue: 'Fud 2019' },
		{ value: "2099", viewValue: 'fudolares.snipprewards.com' },
		{ value: "1029", viewValue: 'garagegames.hipdigital.com' },
		{ value: "14008", viewValue: 'GerberReward' },
		{ value: "1024", viewValue: 'Gospel Music Channel' },
		{ value: "1030", viewValue: 'gowalla.hipdigital.com' },
		{ value: "724", viewValue: 'gpbts.hiprewards.com' },
		{ value: "2088", viewValue: 'graham-test' },
		{ value: "13053", viewValue: 'grahamtest.snipprewards.com:81' },
		{ value: "2055", viewValue: 'he.snipprewards.com' },
		{ value: "13047", viewValue: 'hearthstone.snipprewards.com:81' },
		{ value: "13002", viewValue: 'HipFullStoreTest.hiprewards.com:81' },
		{ value: "13020", viewValue: 'Houseforsale.hiprewards.com:81' },
		{ value: "13048", viewValue: 'ianqa2.snipprewards.com:81' },
		{ value: "2095", viewValue: 'iansnipp2.snipprewards.com' },
		{ value: "2092", viewValue: 'iansnipptest.snipprewards.com' },
		{ value: "2093", viewValue: 'iansnipptest.snipprewards.com' },
		{ value: "14013", viewValue: 'IKOReward' },
		{ value: "13014", viewValue: 'imagetest.hiprewards.com:81' },
		{ value: "1025", viewValue: 'Instant Action' },
		{ value: "14042", viewValue: 'Ipsos Albania' },
		{ value: "14051", viewValue: 'Ipsos Austria' },
		{ value: "14052", viewValue: 'Ipsos Belarus' },
		{ value: "14043", viewValue: 'Ipsos Bosnia Herzegovina' },
		{ value: "14050", viewValue: 'Ipsos Bulgaria' },
		{ value: "14064", viewValue: 'Ipsos Bulgaria BGN' },
		{ value: "14041", viewValue: 'Ipsos Canada' },
		{ value: "14030", viewValue: 'Ipsos Columbia' },
		{ value: "14039", viewValue: 'Ipsos Czech Rep' },
		{ value: "14035", viewValue: 'Ipsos Denmark' },
		{ value: "14062", viewValue: 'Ipsos Dominican Republic' },
		{ value: "14037", viewValue: 'Ipsos France' },
		{ value: "14058", viewValue: 'Ipsos Germany' },
		{ value: "14046", viewValue: 'Ipsos Greece' },
		{ value: "14063", viewValue: 'Ipsos Guatemala' },
		{ value: "14059", viewValue: 'Ipsos Italy' },
		{ value: "14060", viewValue: 'Ipsos Japan' },
		{ value: "14044", viewValue: 'Ipsos Macedonia' },
		{ value: "14054", viewValue: 'Ipsos Malaysia' },
		{ value: "14031", viewValue: 'Ipsos Mexico' },
		{ value: "14036", viewValue: 'Ipsos Montenegro' },
		{ value: "14047", viewValue: 'Ipsos Netherlands' },
		{ value: "14065", viewValue: 'Ipsos Panel Canada' },
		{ value: "14034", viewValue: 'Ipsos Philippines' },
		{ value: "14033", viewValue: 'Ipsos Poland' },
		{ value: "14049", viewValue: 'Ipsos Portugal' },
		{ value: "14061", viewValue: 'Ipsos Russia' },
		{ value: "14038", viewValue: 'Ipsos Serbia' },
		{ value: "14040", viewValue: 'Ipsos Slovakia' },
		{ value: "14055", viewValue: 'Ipsos South Africa' },
		{ value: "14048", viewValue: 'Ipsos Spain' },
		{ value: "14056", viewValue: 'Ipsos Sweden' },
		{ value: "14045", viewValue: 'Ipsos Switzerland' },
		{ value: "14032", viewValue: 'Ipsos UK' },
		{ value: "14057", viewValue: 'Ipsos Ukraine' },
		{ value: "14053", viewValue: 'Ipsos USA' },
		{ value: "1038", viewValue: 'jimbeam.hipdigital.com' },
		{ value: "2039", viewValue: 'jonhamm.hiprewards.com' },
		{ value: "2045", viewValue: 'katietest.hiprewards.com' },
		{ value: "2024", viewValue: 'kfrstg.hipdigital.com' },
		{ value: "730", viewValue: 'kids.hiprewards.com' },
		{ value: "13001", viewValue: 'killerinstinct.hiprewards.com:81' },
		{ value: "16002", viewValue: 'Knowledge Italy' },
		{ value: "16001", viewValue: 'Knowledge Sweden' },
		{ value: "13009", viewValue: 'lamesausage.hiprewards.com:81' },
		{ value: "13025", viewValue: 'lamesausage2.hiprewards.com:81' },
		{ value: "13012", viewValue: 'legoforsale.hiprewards.com:81' },
		{ value: "3001", viewValue: 'Loreal API' },
		{ value: "14003", viewValue: 'Loyalty API' },
		{ value: "13049", viewValue: 'loyaltydemo.snipprewards.com:81' },
		{ value: "13031", viewValue: 'luketest.hiprewards.com:81' },
		{ value: "13051", viewValue: 'magazinetest.snipprewards.com:81' },
		{ value: "564", viewValue: 'malibuflav.hipdigitalstore.com' },
		{ value: "14011", viewValue: 'MarsBounteous' },
		{ value: "735", viewValue: 'mccain.hiprewards.com' },
		{ value: "2031", viewValue: 'megaroz.hipdigital.com' },
		{ value: "737", viewValue: 'mentos_sweeps.hiprewards.com' },
		{ value: "555", viewValue: 'michaeljacksonstore.myplaydigital.com' },
		{ value: "2053", viewValue: 'miketest.hiprewards.com' },
		{ value: "738", viewValue: 'moana.snipprewards.com' },
		{ value: "13019", viewValue: 'MouseforSale.hiprewards.com:81' },
		{ value: "2081", viewValue: 'muserewards.snipprewards.com' },
		{ value: "106", viewValue: 'music.5gum.com' },
		{ value: "565", viewValue: 'music.malibuhotsummer.com' },
		{ value: "140", viewValue: 'music.needforspeed.com' },
		{ value: "2027", viewValue: 'musicaysaboren.hipdigital.com' },
		{ value: "2028", viewValue: 'musicaysabores.hipdigital.com' },
		{ value: "719", viewValue: 'musicdownloads.sprintbbstylesweeps.com' },
		{ value: "30", viewValue: 'myjourney.hipdigital.com' },
		{ value: "13005", viewValue: 'newclient.hiprewards.com:81' },
		{ value: "13006", viewValue: 'newclienttest.hiprewards.com:81' },
		{ value: "2100", viewValue: 'Not used' },
		{ value: "1009", viewValue: 'Offerpal Media - Blip.FM' },
		{ value: "1022", viewValue: 'OggiFinogi' },
		{ value: "14010", viewValue: 'OhioLottery' },
		{ value: "743", viewValue: 'oikos.snipprewards.com' },
		{ value: "13003", viewValue: 'pilot_lite.snipprewards.com:81' },
		{ value: "13013", viewValue: 'pilot213.hiprewards.com:81' },
		{ value: "13052", viewValue: 'pilotblue.snipprewards.com:81' },
		{ value: "1039", viewValue: 'pink.hipdigital.com' },
		{ value: "13008", viewValue: 'PlaydohforSale.hiprewards.com:81' },
		{ value: "188", viewValue: 'premieranniversarydownload.hipdigital.com' },
		{ value: "2030", viewValue: 'prp.hiprewards.com' },
		{ value: "2087", viewValue: 'prp.hiprewards.com' },
		{ value: "2047", viewValue: 'prplite123.hiprewards.com' },
		{ value: "2025", viewValue: 'prpreportingdemo.hipdigital.com' },
		{ value: "2054", viewValue: 'qa2016.snipprewards.com' },
		{ value: "13004", viewValue: 'qaclient.hiprewards.com:81' },
		{ value: "13032", viewValue: 'qaclientpromo.hiprewards.com:81' },
		{ value: "2048", viewValue: 'qaen.hiprewards.com' },
		{ value: "2049", viewValue: 'qaes.hiprewards.com' },
		{ value: "2016", viewValue: 'qanutron.hipdigital.com' },
		{ value: "2036", viewValue: 'qareptest.premiumrewardsplatform.com' },
		{ value: "13017", viewValue: 'qt1.hiprewards.com:81' },
		{ value: "13021", viewValue: 'qt2.hiprewards.com:81' },
		{ value: "2091", viewValue: 'randd.hiprewards.com' },
		{ value: "14016", viewValue: 'Reckitt Mexico' },
		{ value: "14017", viewValue: 'Reckitt Philippines' },
		{ value: "2083", viewValue: 'rewards182.hiprewards.com' },
		{ value: "2086", viewValue: 'rewards1823.hiprewards.com' },
		{ value: "1036", viewValue: 'RGA.hipdigital.com' },
		{ value: "13007", viewValue: 'RolexForSale.hiprewards.com:81' },
		{ value: "741", viewValue: 'roz.test.com' },
		{ value: "2090", viewValue: 'rozbuilder.snipprewards.com' },
		{ value: "2094", viewValue: 'rozsnipptest.snipprewards.com' },
		{ value: "2038", viewValue: 'roztest.hiprewards.com' },
		{ value: "2082", viewValue: 'roztest.snipprewards.com' },
		{ value: "13050", viewValue: 'roztest123.snipprewards.com:81' },
		{ value: "708", viewValue: 'roztest5.hiprewards.com' },
		{ value: "14019", viewValue: 'SCHIFF Rewardshop' },
		{ value: "2032", viewValue: 'seantest.hipdigital.com' },
		{ value: "720", viewValue: 'sgk.downloadsforadifferencestore.com' },
		{ value: "2096", viewValue: 'shradhasnipptest1.snipprewards.com' },
		{ value: "11111", viewValue: 'Snipp pins' },
		{ value: "120", viewValue: 'sonymusichty.myplaydigital.com' },
		{ value: "121", viewValue: 'sonymusicpass.hipdigital.com' },
		{ value: "740", viewValue: 'spkfortify.com' },
		{ value: "2042", viewValue: 'sscc.hiprewards.com' },
		{ value: "2043", viewValue: 'ssmega.premiumrewardsplatform.com' },
		{ value: "2044", viewValue: 'ssprplite.hiprewards.com' },
		{ value: "2041", viewValue: 'sstron.premiumrewardsplatform.com' },
		{ value: "2050", viewValue: 'stevenGiftango.hipdigital.com' },
		{ value: "742", viewValue: 'Sweeps.CraftClubRewards.com' },
		{ value: "731", viewValue: 'sweeps.hiprewards.com' },
		{ value: "13022", viewValue: 'teachtest.hiprewards.com:81' },
		{ value: "1023", viewValue: 'Teleformix' },
		{ value: "1032", viewValue: 'teleformix.hipdigital.com' },
		{ value: "13046", viewValue: 'test422.snipprewards.com:81' },
		{ value: "13039", viewValue: 'testcn1.hiprewards.com:81' },
		{ value: "13041", viewValue: 'testluke.snipprewards.com:81' },
		{ value: "2026", viewValue: 'TestMJ' },
		{ value: "13034", viewValue: 'testtest.hiprewards.com:81' },
		{ value: "1016", viewValue: 'thefilter.com' },
		{ value: "13023", viewValue: 'thefrenchielife.hiprewards.com:81' },
		{ value: "1037", viewValue: 'tiffany.hipdigital.com' },
		{ value: "13030", viewValue: 'TronBons.hiprewards.com:81' },
		{ value: "718", viewValue: 'umg.hipdigital.com' },
		{ value: "1031", viewValue: 'urThots.hipdigital.com' },
		{ value: "150", viewValue: 'us.usamusiccards-store.com' },
		{ value: "1028", viewValue: 'VuClip' },
		{ value: "704", viewValue: 'www.beattheintrostore.com' },
		{ value: "1013", viewValue: 'www.bridge2solutions.com' },
		{ value: "1000", viewValue: 'www.bti.com' },
		{ value: "559", viewValue: 'www.dfdsports.com' },
		{ value: "9999", viewValue: 'www.digitalrewardstore.com' },
		{ value: "716", viewValue: 'www.downloadsforadifferencestore.com' },
		{ value: "705", viewValue: 'www.everyhitsong.com' },
		{ value: "101", viewValue: 'www.fairmontmusicstore.com' },
		{ value: "558", viewValue: 'www.heartbeatsforhope.com' },
		{ value: "1011", viewValue: 'www.heatwave.com' },
		{ value: "115", viewValue: 'www.hipdigitalstore.com' },
		{ value: "700", viewValue: 'www.hipmediastore.com' },
		{ value: "715", viewValue: 'www.hipmp3store.com' },
		{ value: "117", viewValue: 'www.hipmusicstore.com' },
		{ value: "105", viewValue: 'www.justtunesmusic.com' },
		{ value: "710", viewValue: 'www.lotterymusicstore.com' },
		{ value: "1010", viewValue: 'www.mediamonarch.com' },
		{ value: "561", viewValue: 'www.musicaysabor.com' },
		{ value: "181", viewValue: 'www.Oneandonlypalmillamusic.com' },
		{ value: "563", viewValue: 'www.pbteenmusic.com' },
		{ value: "2018", viewValue: 'www.roronoa.com' },
		{ value: "182", viewValue: 'www.signifi.com' },
		{ value: "1019", viewValue: 'www.soundloud.com' },
		{ value: "11", viewValue: 'www.sprintbbstylegiveaway.com' },
		{ value: "739", viewValue: 'zoneperfect.snipprewards.com' },
	]

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


	onBack(): void {
		this._router.navigate(['/flexy/home']);
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
