import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {MenuComponent} from './menu/menu.component';
import {DetailsComponent} from './details/details.component';
import {FormComponent} from './form/form.component';
import {CatalogComponent} from './catalog/catalog.component';
import {PventaComponent} from './pventa/pventa.component';
import {HistoricoComponent} from './historico/historico.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'detalles/:id', component: DetailsComponent},
  { path: 'formulario', component: FormComponent},
  { path: 'catalogo', component: CatalogComponent},
  { path: 'pventa', component: PventaComponent},
  { path: 'historico', component: HistoricoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
