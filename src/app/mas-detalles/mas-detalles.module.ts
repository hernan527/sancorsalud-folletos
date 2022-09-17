import { NgModule,Injectable  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MasDetallesComponent } from './mas-detalles.component';
// import { HttpClient } from '@angular/common/http';
import { ClinicasListComponent } from './clinicas-list/clinicas-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import {TableModule} from 'primeng/table';
import {MDCDataTable} from '@material/data-table';
import {MatTabsModule} from '@angular/material/tabs';
import {ClinicasListGroupComponent} from './clinicas-list-group/clinicas-list-group.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatCardModule} from '@angular/material/card';




@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        TableModule,
        MatTabsModule,
        MatCardModule
    ],
    declarations: [
        MasDetallesComponent,
        ClinicasListComponent,
        ClinicasListGroupComponent
        
    ],
    providers: [MDCDataTable],
    entryComponents: [ClinicasListGroupComponent],
    bootstrap: [ClinicasListGroupComponent]
})

export class MasDetallesModule {
   
}

platformBrowserDynamic().bootstrapModule(MasDetallesModule)
.catch(err => console.error(err));