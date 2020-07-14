import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { CibilstatusComponent } from './cibilstatus/cibilstatus.component';
const RSrouting: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'cibil', component: CibilstatusComponent },
    { path: 'vehicledetails', component: VehicleDataComponent },
];

@NgModule({
    declarations: [DashboardComponent, CibilstatusComponent, VehicleDataComponent],
    imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(RSrouting)],
})
export class RelationShipExecativeModule {}
