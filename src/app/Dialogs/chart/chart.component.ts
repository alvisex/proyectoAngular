import {Component, AfterViewInit, ElementRef, Inject} from '@angular/core';
import { Chart } from 'chart.js';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  chart =  [];
  meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  ventas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(
    private elementRef: ElementRef,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngAfterViewInit() {
    this.rellenoVentas();
    const ctx = this.elementRef.nativeElement.querySelector('#canvas');

    Chart.defaults.global.defaultFontColor = '#fff';
    this.chart = new Chart( ctx , {
      type: 'line',
      data: {
        labels: this.meses,
        datasets: [
          {
          label: 'Ventas',
          data: this.ventas,
          fill: false,
            backgroundColor: '#535353',
            borderColor: '#acff33'
          }
        ]
      },
     options: {
        legend: {
          display: true,
        },
       scales: {
          xAxes: [{
            display: true,
          }],
         yAxes: [{
            display: true,
         }]
       }
     }
    });
  }

  rellenoVentas() {
    const sales = this.data.ventas;
    for (let s of sales) {
      let mes = new Date(s.date).getMonth();
      this.ventas[mes]  += s.total;
    }
  }


}
