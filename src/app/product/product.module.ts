import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHeroComponent } from './product-list/product-hero/product-hero.component';
import { ListingCardComponent } from './listing-card/listing-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';
import { ClinicasPipe } from './Pipes/clinicas.pipe';
import { ClinicasListComponent } from './product-details/clinicas-list/clinicas-list.component';
import { ListaFiltroComponent } from './product-details/clinicas-list/lista-filtro/lista-filtro.component';
import { ModalModule } from '../_modal';





@NgModule({
  declarations: [
    ProductListComponent,
    ProductHeroComponent,
    ProductCardComponent,
    ListingCardComponent,
    ProductDetailsComponent,
    ClinicasListComponent,
    ListaFiltroComponent,
    FilterPipe,
    SortPipe,
    ClinicasPipe 
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    ModalModule,
   

  ]
})
export class ProductModule { }
