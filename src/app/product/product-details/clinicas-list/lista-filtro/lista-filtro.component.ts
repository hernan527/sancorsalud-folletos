import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../showcase/domain/product';
import { ProductService } from '../../../../showcase/service/productservice';

@Component({
    selector: 'app-lista-filtro',
    templateUrl: './lista-filtro.component.html',
    styleUrls: ['./lista-filtro.component.scss']
})
export class ListaFiltroComponent implements OnInit {

    products: Product[];

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then(data => this.products = data);
    }
}