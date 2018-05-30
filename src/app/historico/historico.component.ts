import {Component, OnInit, AfterViewInit , ViewChild} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DbmongoService} from '../dbmongo.service';
import {Sale, ProductV} from '../products';
import {TestdComponent} from '../Dialogs/testd/testd.component';
import {SaledetailsComponent} from '../Dialogs/saledetails/saledetails.component';
import {ChartComponent} from '../Dialogs/chart/chart.component';
declare var  $: any;

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit, AfterViewInit {
  displayedColumns = ['id', 'total', 'date'];
  dataSource: MatTableDataSource<Sale>;
  sales: any;
  res: any;
  saleDetail: Sale;
  productsV: ProductV[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dbService: DbmongoService,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getSales();
    $('.modal').modal();
  }
  ngAfterViewInit() {}

  getSales() {
    this.dbService.getTableS().subscribe( res => {
      this.res = res;
      // console.log(this.res.response.data);
      this.sales = this.res.response.data;
      console.log(this.sales);

      this.dataSource = new MatTableDataSource(this.sales);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  detalles( id: any) {
    console.log(id);
    this.dbService.getOneP( id, 'sales').subscribe( ress => {
      let result: any;
      result = ress;
      if (result.response.status === 1) {
        this.saleDetail = result.response.data[0];
        console.log(this.saleDetail);
        this.productsV = this.saleDetail.productosV;

        this.dialog.open(SaledetailsComponent, {data: this.saleDetail});

      } else {
        console.log('No es un ID valido');
      }
    });
  }

  abrirCanvas() {
    this.dialog.open(ChartComponent, { width: '950px' , data: { ventas: this.sales , name: 'Graficos de Ventas'}});
  }

}

