import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from '../../shared/shared.module';
import { SortPipe } from '../Pipes/sort.pipe';
import { ClinicasPipe } from '../Pipes/clinicas.pipe';

@NgModule({
  declarations: [
    SortPipe,
    ClinicasPipe
  ],
  imports: [
    CommonModule,

    SharedModule,
    NgParticlesModule
  ]
})
export class ProductDetailsModule {}