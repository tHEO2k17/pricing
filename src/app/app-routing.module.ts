import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingComponent } from './presentation/pricing/pricing.component';


const routes: Routes = [
  {path: 'pricing', component: PricingComponent},
  { path: '**', component: PricingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PricingComponent ];
