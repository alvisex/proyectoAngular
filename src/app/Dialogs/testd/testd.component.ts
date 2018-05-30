import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { NgForm } from '@angular/forms';
import { DatadService} from '../../datad.service';

@Component({
  selector: 'app-testd',
  templateUrl: './testd.component.html',
  styleUrls: ['./testd.component.css']
})
export class TestdComponent implements OnInit {
  constructor(
    private  matdref: MatDialogRef<TestdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DatadService
  ) {
  }

  ngOnInit() {
  }

  public close() {

    this.matdref.close();
  }

  enviar(form: NgForm) {
    // console.log(form.value);
    this.dataService.addProductData(Object.assign( form.value, {id: 0}));
    this.matdref.close();
  }


}
