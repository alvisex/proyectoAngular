import {Component, Inject, OnInit} from '@angular/core';
import {DatadService} from '../../datad.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TestdComponent} from '../testd/testd.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private  matdref: MatDialogRef<TestdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dataService: DatadService
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  public close() {
    this.matdref.close();
  }
  confirmDelete() {

  }

}
