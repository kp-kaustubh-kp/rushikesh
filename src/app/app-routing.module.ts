import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './security/auth.guard';
import { RoleGuard } from './security/role.guard';


const routes: Routes = [
  // {path:"home", component:HomeComponent},
  // {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'product', loadChildren:()=>import('./components/product/product.module').then(mod=>mod.ProductModule)},
  {path:'cart',loadChildren:()=>import('./components/cart/cart.module').then(mod=>mod.CartModule),canActivate:[AuthGuard]},
  {path:"account", loadChildren:()=>import('./components/account/account.module').then(mod=>mod.AccountModule)},
  {path:"about", loadChildren:()=>import('./components/about/about.module').then(mod=>mod.AboutModule)},
  {path:"admindashboard", loadChildren:()=>import('./components/admindashboard/admindashboard.module').then(mod=>mod.AdmindashboardModule),canActivate:[RoleGuard]},
  {path:"payment",loadChildren:()=>import('./components/payment/payment.module').then(mod=>mod.PaymentModule),canActivate:[AuthGuard]},
  {path:"landing",loadChildren:()=>import('./components/landing/landing.module').then(mod=>mod.LandingModule),canActivate:[AuthGuard]},
  {path:"trial", loadChildren:()=>import('./components/trial/trial.module').then(mod=>mod.TrialModule),canActivate:[AuthGuard]},
  {path:"home", loadChildren:()=>import('./components/home/home.module').then(mod=>mod.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
