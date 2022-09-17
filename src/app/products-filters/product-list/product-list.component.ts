import { Component, OnInit, HostBinding } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { PlanesService } from '../../services/planes.service';
import { Plan } from '../../models/Plan';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {ProductPlant, ProductsFiltersQuery, ProductsFiltersService} from '../state';



declare var $: any;

@Component({
  selector: 'll-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  [x: string]: any;
  products$: Observable<ProductPlant[]>;
  loading$: Observable<boolean>;

  @HostBinding('class') classes = 'row';
  plan: Plan = {
    id:0 ,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };

  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  planes : any = [];
  view = 'grid';
  products = [];
  empresa = '';
  SearchEmpresa = '';
  SortbyParam = '';
  SortDirection = 'asc';
  showFiller = false;

  constructor(private productsService: ProductsFiltersService, private productsQuery: ProductsFiltersQuery,private planesService: PlanesService, private router: Router, private activedRoute: ActivatedRoute) {}

  // ngOnInit() {
  //   this.planes=this.planesService.getPlanes();
  // }
  ngOnInit(): void {
    setTimeout(() => {
      this.productsService.get().subscribe();
    this.loading$ = this.productsQuery.selectLoading();

    this.products$ = this.productsService.selectAll();
      this.products = productsDB.Product;
      this.isLoaded = true;
    }, 8000);
  }

  onEmpresaFilter() {
    this.SearchEmpresa = this.empresa;
  }

  onEmpresaFilterClear() {
    this.SearchEmpresa = '';
    this.empresa = 'Empresa';
  }

  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  };
  getPlanes(){
    this.data.getPlanes().subscribe((response: { [x: string]: any; })=> {
    this.planes = response["data"];
    });
  
}
}


  