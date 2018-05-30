import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-saledetails',
  templateUrl: './saledetails.component.html',
  styleUrls: ['./saledetails.component.css']
})

export class SaledetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  ngOnInit() {}
}
