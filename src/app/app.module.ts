import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule, MatDialogModule, MatDialogRef, MatIconModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { QRCodeModule } from 'angular2-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsService } from './products.service';
import { DbmongoService } from './dbmongo.service';
import { PventaComponent } from './pventa/pventa.component';
import { HistoricoComponent } from './historico/historico.component';
import { TestdComponent } from './Dialogs/testd/testd.component';
import { DatadService } from './datad.service';
import { DeleteDialogComponent } from './Dialogs/delete-dialog/delete-dialog.component';
import { SaledetailsComponent } from './Dialogs/saledetails/saledetails.component';
import { ChartComponent } from './Dialogs/chart/chart.component';

declare var jquery: any;
declare var $: any;


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    FormComponent,
    MenuComponent,
    DetailsComponent,
    CatalogComponent,
    PventaComponent,
    HistoricoComponent,
    TestdComponent,
    DeleteDialogComponent,
    SaledetailsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,

    QRCodeModule ,
    NgQrScannerModule,

    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [ProductsService, DbmongoService, DatadService],
  bootstrap: [AppComponent],
  entryComponents: [TestdComponent, DeleteDialogComponent, SaledetailsComponent, ChartComponent]
})
export class AppModule { }
