import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrustMarkRoutingModule } from './trust-mark-routing.module';
import { TrustmarkHomeComponent } from './trustmark-home/trustmark-home.component';


@NgModule({
  declarations: [TrustmarkHomeComponent],
  imports: [
    CommonModule,
    TrustMarkRoutingModule
  ]
})
export class TrustMarkModule { }
