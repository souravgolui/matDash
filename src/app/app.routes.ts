import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: 'dash', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: '**', component: ErrorComponent }

];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
