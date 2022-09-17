import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit, OnDestroy {
  title: any;
  constructor(private config: PrimeNGConfig) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
      this.config.setTranslation({
          accept: 'Accept',
          reject: 'Cancel',
          // translations
      });
  }
  
}