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

import { GaurantorDetailsComponent } from './gaurantor-details/gaurantor-details.component';
import { FormsModule } from '@angular/forms';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'GaurantorDetails', component: GaurantorDetailsComponent },
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, GaurantorDetailsComponent],
    imports: [CommonModule,FormsModule, RouterModule.forChild(RSrouting)],

import { PreviousLoanDetailsComponent } from './previous-loan-details/previous-loan-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'PreviousLoanDetails', component: PreviousLoanDetailsComponent },
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, PreviousLoanDetailsComponent],
    imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(RSrouting)],


})
export class RelationShipExecativeModule {}
