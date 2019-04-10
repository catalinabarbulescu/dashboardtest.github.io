import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  Highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'pie'
    },
      series: [
        {
          name: 'London',
          data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ],
  //    navigation: {
  //     buttonOptions: {
  //         enabled: true,
  //     }
  // },
  exporting: {
    enabled: true
}
};

  ngOnInit() {
    //   const chart = new CanvasJS.Chart('pieChartContainer', {
  //     theme: ' light2 ',
  //     colorSet: 'customColorSet1',
  //     animationEnabled: true,
  //     exportEnabled: true,
  //     title: {
  //       text: 'Monthly expnses'
  //     },
  //     data: [{
  //       explodeOnClick: true,
  //       type: 'doughnut',
  //       showInLegend: true,
  //       toolTipContent: '<b>{name}</b>: ${y} (#percent%)',
  //       toolTipcornerRadius: 6,
  //       indexLabel: '{name} - #percent%',
  //       dataPoints: [
  //         { y: 450, name: 'Food' , color: 'green', label: 'Food Industry'},
  //         { y: 100, name: 'Insurance' },
  //         { y: 30, name: 'Traveling' },
  //         { y: 800, name: 'Housing' },
  //         { y: 150, name: 'Education' },
  //         { y: 150, name: 'Shopping'},
  //         { y: 250, name: 'Others' }
  //       ]
  //     }],
  //     options: {
  //       layout: {
  //         padding: {
  //           left: 0,
  //           right: 50,
  //           top: 0,
  //           bottom: 0
  //         }
  //       }

  //     }

  //   });
  //   chart.render();

}

}
