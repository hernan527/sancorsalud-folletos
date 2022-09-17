import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../_modal';
import { productsDB } from '../../shared/data/products';
import { MasDetallesComponent } from '../../mas-detalles/mas-detalles.component';
import {MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  price: Number;
  id:any;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;
}

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})

export class HomeProductsComponent implements OnInit {
  products = [];
  bodyText: string;
  name: string;
  price: Number;
  id:Number;
  category: string;
  rating:Number;
  clinicas: any;
  clinicasArrayObjets: any;
  clinicasmap:any;
  entidades: any;
  producto: any;

  dialogRef: MatDialogRef<MasDetallesComponent>;

  constructor(private modalService: ModalService, public dialog: MatDialog) { 
    this.products = productsDB.Product;
  }

 openModal(id: string) {
    this.modalService.open('custom-modal-2');
  }

  closeModal(id: string) {
    this.modalService.close('custom-modal-2');
  }

  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  openDialog(
    // enterAnimationDuration: string, exitAnimationDuration: string,
    product?) : void {
      const dialogRef = this.dialog.open(MasDetallesComponent, {
      // enterAnimationDuration,
      // exitAnimationDuration,
      data: { name: product ? product.name : '',
      id : product ? product.id : '', 
      price : product ? product.price : '',
      category : product ? product.category : '',
      rating : product ? product.rating : '',
      clinicas : product ? product.clinicas : '', 
      clinicasArrayObjets : product ? product.clinicasArrayObjets : '',
      clinicasmap: product ? product.clinicasmap : '', 
      entidades: product ? product.entidades : '',
      users: product ? product.clinicas : '',
      producto: product

      },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '90%',
      panelClass: 'full-screen-modal',
    disableClose: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }
  

}








