import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilStatusComponent } from './cibil-status/cibil-status.component';
import { CustomerbankdetailsComponent } from './customerbankdetails/customerbankdetails.component';
import {FormsModule} from '@angular/forms'
const OErouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {path: 'cibil', component: CibilStatusComponent},
    {path: 'CustomerBankDetails', component: CustomerbankdetailsComponent}
];

@NgModule({
    declarations: [DashboardComponent,  CibilStatusComponent, CustomerbankdetailsComponent],
    imports: [CommonModule, RouterModule.forChild(OErouting),FormsModule],
})
export class OperationalExecativeModule {}
