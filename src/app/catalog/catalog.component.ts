import { Component, OnInit } from '@angular/core';
import { Product} from '../products';
import { DbmongoService} from '../dbmongo.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: any;
  productone: Product;
  respuestaservidor: any;
  constructor(
    private dbService: DbmongoService
  ) {}

  ngOnInit() {
    this.getProduct(3, 'products');
    this.getProducts();
  }
  getProducts() {
    console.log('entro funcion');
    this.dbService.getTable().subscribe( res => {
      this.respuestaservidor = res;
      console.log(this.respuestaservidor);
      this.products = this.respuestaservidor.response.data;
      // console.log(this.products);
    });
  }

  getProduct(idd: any, cn: string) {
   this.dbService.getOneP(idd, cn).subscribe( res => {
     this.respuestaservidor = JSON.parse( JSON.stringify(res) );
     // console.log(this.serverRes);
     this.productone = this.respuestaservidor.response.data[0];
     console.log(this.productone);
   });
  }
}
