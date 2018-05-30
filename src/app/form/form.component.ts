///<reference path="../../../node_modules/@angular/material/table/typings/table-data-source.d.ts"/>
import { Component, OnInit , AfterViewInit , ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ProductP } from '../products';
import {DbmongoService} from '../dbmongo.service';
import { DatadService} from '../datad.service';
import {TestdComponent} from '../Dialogs/testd/testd.component';
import {DeleteDialogComponent} from '../Dialogs/delete-dialog/delete-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements AfterViewInit, OnInit {
  displayedColumns = ['id', 'name', 'description', 'image', 'actions'];
  dataSource: MatTableDataSource<ProductP>;
  products: ProductP[];
  res: any;
  result: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  today = Date.now();
  formulario = ProductP;
  constructor(
    private dbService: DbmongoService,
    private dataService: DatadService,
    public dialog: MatDialog,
    private router: Router
  ) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit() {
    this.getProducts();
  }
  ngAfterViewInit() {
    // this.dataSource = new MatTableDataSource(this.products);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  enviar(form: NgForm) {
    // console.log(this.products);
    this.formulario = form.value;
    this.dbService.pushDB(this.formulario, 'products').subscribe( ress => {
      this.result = ress;
      console.log('resultado de insercion');
      console.log(this.result);
      if (this.result.response.status === 1) {
        console.log('entro al IF');
        console.log(this.formulario);
        // this.products.push(this.formulario);
        console.log(this.result.response.data);
      }
      // console.log(this.result.response.status);
    });
    this.dataSource._updateChangeSubscription();
  }

  getProducts() {
    this.dbService.getTable().subscribe( res => {
      this.res = res;
      // console.log(this.res.response.data);
      this.products = this.res.response.data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  select(id: any) {
    console.log(id);
    const ccc = this.products.find(x => x._id === id);
    console.log(ccc);
  }

  public openModal() {
      const dialogRef = this.dialog.open(TestdComponent, {
        data: { name: 'Nuevo Producto' }
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log(result);
        if ( result ) {
          let newP = Object.assign( result, {id: 0});
          // console.log(newP);
          this.dbService.pushDB(newP, 'products').subscribe( ress => {
            this.result = ress;
            if (this.result.response.status === 1) {
              newP = Object.assign(newP, {_id: this.result.response.data });
              this.products.push(newP);
              this.dataSource._updateChangeSubscription();
            }
          });
        }
      });
  }

  details(id: any) {
    this.router.navigate(['/detalles/'+id]);
  }

  startEdit(id: any) {
    const productE = this.products.find(x => x._id === id);
    const index = this.products.findIndex(x => x._id === id);

    const dialogRef = this.dialog.open(TestdComponent, { data: productE });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updtProduct = result;
        updtProduct._id = productE._id;
        console.log(updtProduct);
        this.dbService.updateDB( updtProduct, 'products').subscribe( ress => {
          this.result = ress;
          if (this.result.response.status === 1) {
            this.products[index] = result;
            this.dataSource._updateChangeSubscription();
          }
        });
      }
    });

  }

  deleteItem(id: any, name: string) {
    const index = this.products.findIndex(x => x._id === id);

    const dialogRef = this.dialog.open(DeleteDialogComponent, { data: {_id: id, name: name} });

    dialogRef.afterClosed().subscribe(result => {
      if ( result === 1 ) {
        this.dbService.deleteDB(id, 'products').subscribe( ress => {
          this.result = ress;
          if (this.result.response.status === 1) {
            this.products.splice(index, 1);
            this.dataSource._updateChangeSubscription();
          }
        });
      }
    });
  }

}

