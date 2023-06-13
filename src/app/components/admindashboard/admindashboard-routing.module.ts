import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdmindashboardComponent } from './admindashboard.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ProductTableComponent } from './productTable/product-table.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path:'admindashboard', component: AdmindashboardComponent,
  children:[
    {path:'productTable', component: ProductTableComponent},
    {path:'addproduct', component: AddproductComponent},
    {path:'analysis', component: AnalysisComponent},
    {path:'updateproduct/:productid/:productimgid',component:UpdateproductComponent}


  ]


}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindashboardRoutingModule { }
