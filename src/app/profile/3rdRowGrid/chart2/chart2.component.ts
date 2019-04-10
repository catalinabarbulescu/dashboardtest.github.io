import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const chart = new CanvasJS.Chart('chart2', {
      theme: ' light2 ',
      colorSet: 'customColorSet1',
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: 'Monthly expnses'
      },
      data: [{
        explodeOnClick: true,
        type: 'line',
        showInLegend: true,
        toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
        toolTipcornerRadius: 6,
        indexLabel: '{name} - #percent%',
        dataPoints: [
          { y: 450, name: 'Food' , color: 'green', label: 'Food Industry'},
          { y: 100, name: 'Insurance' },
          { y: 30, name: 'Traveling' },
          { y: 800, name: 'Housing' },
          { y: 150, name: 'Education' },
          { y: 150, name: 'Shopping'},
          { y: 250, name: 'Others' }
        ]
      }],
      options: {
        layout: {
          padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
          }
        }

      }

    });
    chart.render();
  }

}
