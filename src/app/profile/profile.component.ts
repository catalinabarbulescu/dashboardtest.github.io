import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';
// import { MatGridList } from '';
console.log(Component, 'Uhoh, Something was not defined, likely part of a circular reference loop');
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: Data[];
  url = 'http://localhost:4000/profile';
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}
}
