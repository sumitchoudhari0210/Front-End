import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';
import { EnquiryDetailsComponent } from './enquiry-details/enquiry-details.component';
import { FormsModule } from '@angular/forms';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'enquirydetails', component: EnquiryDetailsComponent },
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, EnquiryDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(RSrouting), FormsModule],
})
export class RelationShipExecativeModule {}
