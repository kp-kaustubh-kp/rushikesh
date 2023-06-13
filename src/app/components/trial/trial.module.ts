import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TrialRoutingModule } from './trial-routing.module';
import { PurchasedhistoryComponent } from './purchasedhistory/purchasedhistory.component';
import { TrialComponent } from './trial.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { TrackorderComponent } from './trackorder/trackorder.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule}   from '@angular/forms';

import { TokenInterceptorService } from 'src/app/services/token/token-interceptor.service';
@NgModule({
  declarations: [TrialComponent, TrackorderComponent, PurchasedhistoryComponent, ResetpasswordComponent, WelcomeComponent, WishlistComponent],
  imports: [
    CommonModule,
    TrialRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
  
})
export class TrialModule { }
