import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ChartComponent} from '../Dialogs/chart/chart.component';
import {QRCodeComponent} from 'angular2-qrcode';
declare var  $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  today = Date.now();

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    $('.carousel').carousel();
  }

  abrirCanvas() {
    this.dialog.open(ChartComponent, { width: '950px' , data: {name: 'holis'}});
  }


}
