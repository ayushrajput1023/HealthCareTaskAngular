import { Routes } from '@angular/router';
import { UpdateEmployeeNameComponent } from './update-employee-name/update-employee-name.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create/create.component';

export const routes: Routes = [

    { path:'', component: HomeComponent },
    { path:'create', component: CreateEmployeeComponent },
    { path:'update', component: UpdateEmployeeNameComponent },
];
