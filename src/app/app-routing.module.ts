import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { LayoutModule } from './layout/layout.module';
import { CustomerbankdetailsComponent } from './layout/operational-execative/customerbankdetails/customerbankdetails.component';

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
    //     canActivate: [AuthGuard]
    // },
    {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'role',
        loadChildren : () => LayoutModule
    },
    {path:"",component:CustomerbankdetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
