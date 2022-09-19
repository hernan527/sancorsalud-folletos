import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { MasDetallesModule } from './mas-detalles/mas-detalles.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeroFormComponent } from './hero-form/hero-form.component';

import {ReactiveFormsModule} from "@angular/forms";
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {MarkdownModule} from 'ngx-markdown';
import {environment} from '../environments/environment';



// import { LoadingButtonComponent } from './loading-button/loading-button.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent
        // LoadingButtonComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MasDetallesModule,
    ReactiveFormsModule,
   
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    


  ],
  providers: [{
    provide: NG_ENTITY_SERVICE_CONFIG,
    
    useValue: {
      baseUrl: 'https://jsonplaceholder.typicode.com'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
