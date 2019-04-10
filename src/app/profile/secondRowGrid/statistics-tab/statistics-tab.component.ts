import { Component, OnInit } from '@angular/core';
console.log(Component , 'statistics is working');

@Component({
  selector: 'app-statistics-tab',
  templateUrl: './statistics-tab.component.html',
  styleUrls: ['./statistics-tab.component.css']
})
export class StatisticsTabComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
