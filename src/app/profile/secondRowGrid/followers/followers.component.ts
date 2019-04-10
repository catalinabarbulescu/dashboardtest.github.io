import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  timeRange = ['7 days', '30 days', '6 months ', '1 year'];

  constructor() { }

  ngOnInit() {
  }

}
