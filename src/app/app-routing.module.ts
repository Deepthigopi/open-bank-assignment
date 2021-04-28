import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EligibilityCalcComponent } from './components/eligibility-calc/eligibility-calc.component';

const routes: Routes = [
  { path: "eligibility-calc", component:EligibilityCalcComponent },
  { path: '',   redirectTo: '/eligibility-calc', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
