import { NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { PurchasedhistoryComponent } from './purchasedhistory/purchasedhistory.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { TrialComponent } from './trial.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WishlistComponent } from './wishlist/wishlist.component';


const routes: Routes = [
  {path:"trial", component: TrialComponent,
  children:[
      {path:"purchasedhistory",component:PurchasedhistoryComponent},
      {path:"resetpassword",component:ResetpasswordComponent},
      {path:"trackorder",component:TrackorderComponent},
      {path:"wishlist",component:WishlistComponent},
      {path:"welcome",component:WelcomeComponent},
  ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrialRoutingModule { }
