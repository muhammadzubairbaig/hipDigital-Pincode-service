import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    // {
    //   link: "/pincode",
    //   icon: "disc",
    //   menu: "Pincode",
    // },
    {
      link: "/create-pincode-serial",
      icon: "map-pin",
      menu: "Pincode",
    },
    {
      link: "/activate-pincode",
      icon: "map-pin",
      menu: "Activate Pincode",
    },
    {
      link: "/get-pincode-list",
      icon: "list",
      menu: "Mangage Promotion",
    },
    {
      link: "/pincode-detail",
      icon: "book-open",
      menu: "Pincode Validation",
    },
    {
      link: "/custom-pincode",
      icon: "pen-tool",
      menu: "Pincode Ingestion",
    },
    {
      link: "/childsite-promotions",
      icon: "file-text",
      menu: "Childsite Promotions",
    }
  ]

}
