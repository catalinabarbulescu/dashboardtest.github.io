

import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-smallmenu',
  templateUrl: './smallmenu.component.html',
  styleUrls: ['./smallmenu.component.css']
})
export class SmallmenuComponent implements OnInit {

  nextUrl: String;
  // password: String;
  // name: String;

  constructor(private router1: Router) {
    router1.events.subscribe((_: NavigationEnd) => this.nextUrl = _.url);
  }

  ngOnInit() {
  }

}
