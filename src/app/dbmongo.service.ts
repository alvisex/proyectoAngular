import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class DbmongoService {

  constructor(
    private _httpC: HttpClient
  ) { }

  getTable() {
    // let headers = new Headers({ 'Content-Type': 'application/json'});
    // let options = new RequestOptions({ headers: headers });
    // return this._http.post('/api/getProducts', options).map(resultado => this.result = resultado );
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/getProducts', null, {headers})
      .catch( (err: any) => Observable.throw (err || 'server error') );
  }

  getTableS() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/getSales', null, {headers})
      .catch( (err: any) => Observable.throw (err || 'server error') );
  }

  getOneP(idd: string, cN: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    // const params = new HttpParams().set('idd', idd).set('collectionN', cN);
    return this._httpC.post('/api/getOne', { idd: idd, collectionN: cN }, {headers});
  }

  pushDB(formu: any, cN: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/pushOne', { formu , cN}, {headers});
  }
  pushSale(formu: any, cN: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/pushSale', { formu , cN}, {headers});
  }

  deleteDB(idd: any, cN: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/deleteOne', { idd , cN}, {headers});
  }

  updateDB(productE: any, cN: string) {
    console.log('Que tranzaaa');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this._httpC.post('/api/updateO', { productE , cN}, {headers});
  }

}
