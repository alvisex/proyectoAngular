import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';
import {DbmongoService} from '../dbmongo.service';
import {MatTableDataSource} from '@angular/material';
import {ProductV} from '../products';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {QrScannerComponent} from 'angular2-qrscanner';

@Component({
  selector: 'app-pventa',
  templateUrl: './pventa.component.html',
  styleUrls: ['./pventa.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PventaComponent implements OnInit, AfterViewInit {
  formID: any;
  result: any;
  total: number;
  products: ProductV[];
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'price', 'quantity'];
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent ;

  constructor(
    private dbService: DbmongoService,
    private location: Location,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource();
    this.products = [];
    this.total = 0;
  }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0){
        let choosenDev;
        for (const dev of videoDevices){
          if (dev.label.includes('front')){
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log('Detecto algo: ');
      console.log(result);
      this.agregarQR(result);

    });
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.products);
  }

  agregar(form: NgForm) {
    this.formID = form.value;
    const fId = this.formID.idd;
    console.log(fId);
    const index = this.coincide(fId);
    if ( index >= 0 ) {
      console.log('positivo con: ' + index);
      this.products[index].quantity++;
      this.total += this.products[index].price;
    } else {
      this.buscaBD(fId);
    }
    this.dataSource._updateChangeSubscription();
  }
  agregarQR(idQR: any) {

    console.log(idQR);
    const index = this.coincide(idQR);
    if ( index >= 0 ) {
      console.log('positivo con: ' + index);
      this.products[index].quantity++;
      this.total += this.products[index].price;
    } else {
      this.buscaBD(idQR);
    }
    this.dataSource._updateChangeSubscription();
  }

  buscaBD(id: any) {
    console.log('Buscando de la base de datos');
    this.dbService.getOneP(id, 'products').subscribe( ress => {
      let result: any;
      result = ress;
      if (result.response.status === 1) {
        const p = result.response.data[0];
        this.products.push({_id: p._id, name: p.name, quantity: 1, price: p.price });
        this.dataSource._updateChangeSubscription();
        this.total += p.price;
      } else {
        console.log('No es un ID valido');
      }
    });
  }

  coincide(id: any): number {
    let i = 0;
    for (let p of this.products) {
        if (p._id == id ) { return i; }
        i++;
    }
  return -1;
  }

  terminaVenta() {
    const today = Date.now();
    const nuevoP = {
      productosV: this.products,
      total: this.total,
      date: today
    };
    this.dbService.pushSale(nuevoP, 'sales').subscribe( ress => {
      this.result = ress;
      console.log('resultado de insercion');
      console.log(this.result);
      if (this.result.response.status === 1) {
        console.log('entro al IF');
        console.log(nuevoP);
        console.log(this.result.response.data);
      }
    });
    this.router.navigate(['/historico']);
  }

}
