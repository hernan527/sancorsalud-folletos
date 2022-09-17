import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ModalService } from '../../../_modal';


declare var funcion1: any;



@Component({
  selector: 'll-product-hero',
  templateUrl: './product-hero.component.html',
  styleUrls: ['./product-hero.component.scss']
})
export class ProductHeroComponent implements OnInit, AfterViewInit {
  bodyText: string;

  constructor(private modalService: ModalService) { }

  openModal(id: string) {
    this.modalService.open('custom-modal-1');
  }

  closeModal(id: string) {
    this.modalService.close('custom-modal-1');
  }

  openForm(id: string) {
    this.modalService.open('custom-modal-5');
  }

  closeForm(id: string) {
    this.modalService.close('custom-modal-5');
  }
  ngOnInit(): void {
    this.bodyText = 'This text can be updated in modal 1';
  }

  onClick1() {
    // alert("?ok?");
    // alert("Hola");
  
    // funcion1(this.form.get('name').value);
  }




  @ViewChild('nombre') someInput: ElementRef;
  ngAfterViewInit() {
    this.someInput.nativeElement.value;
  }

}
function nombre(arg0: string, nombre: any, arg2: string) {
  throw new Error('Function not implemented.');
}

