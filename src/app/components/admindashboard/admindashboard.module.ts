import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { AdmindashboardComponent } from './admindashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmindashboardfilterPipe } from 'src/app/Pipes/admindashboardfilter.pipe';
import { AdmindashboardsortPipe } from 'src/app/Pipes/admindashboardsort.pipe';
import { ProductTableComponent } from './productTable/product-table.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [AdmindashboardComponent, AdmindashboardfilterPipe, AdmindashboardsortPipe, ProductTableComponent, AnalysisComponent, AddproductComponent, UpdateproductComponent],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    
   

   
   

   
  ]
})
export class AdmindashboardModule { }
