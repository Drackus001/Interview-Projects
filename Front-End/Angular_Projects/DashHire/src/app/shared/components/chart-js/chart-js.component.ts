import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss'],
})
export class ChartJsComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [90, 240, 310, 195, 200, 290, 270, 240, 160, 170, 250, 200],
        label: '',
        fill: true,
        tension: 0.5,
        borderColor: '#0F8DFE',
        backgroundColor: '#8ABCF2',
        spanGaps: true,
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = false;
}
