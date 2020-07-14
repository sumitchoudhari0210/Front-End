import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'document-details', component: DocumentDetailsComponent}
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, DocumentDetailsComponent],
    imports: [CommonModule, RouterModule.forChild(RSrouting)],
})
export class RelationShipExecativeModule {}
