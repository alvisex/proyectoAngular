import { Injectable } from '@angular/core';

@Injectable()
export class DatadService {
  dialogData: any;
  constructor() { }

  getDialogData() {
    return this.dialogData;
  }
  addProductData (form: any): void {
    this.dialogData = form;
  }

  refresh() {
    this.dialogData = null;
  }

}
