import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';
import { SortPipe } from 'src/app/Pipes/sort.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, FilterPipe,
    SortPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    NgxPaginationModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ]
})
export class HomeModule { }
