import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcityComponent } from './addcity/addcity.component';
import { Routes, RouterModule } from '@angular/router';

const MasterRouting: Routes = [
  {path: 'add', component: AddcityComponent}
];


@NgModule({
  declarations: [AddcityComponent],
  imports: [
    CommonModule, RouterModule.forChild(MasterRouting)
  ]
})
export class MasterModuleModule { }
