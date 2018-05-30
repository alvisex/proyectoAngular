import {Component, ElementRef, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

import { ProductP } from '../products';
import { ProductsService } from '../products.service';
import { DbmongoService} from '../dbmongo.service';
import {HttpClient} from '@angular/common/http';
import {QRCodeComponent} from 'angular2-qrcode';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() product: ProductP;
  serverRes: any;
  id_p: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,
    private dbService: DbmongoService,
  ) { }

  ngOnInit() {
    this.getProductBD();
  }

  getProductBD() {
    // const id = +this.route.snapshot.paramMap.get('id');
   const id = this.route.snapshot.paramMap.get('id');
    const cn = 'products';

    this.dbService.getOneP(id, cn).subscribe( res => {
      this.serverRes = res ;
      // console.log(this.serverRes);
      this.product = this.serverRes.response.data[0];
      console.log(this.product);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
