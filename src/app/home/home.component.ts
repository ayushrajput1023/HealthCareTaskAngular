import { Component } from '@angular/core';
import { ShowAllEmployeeDataComponent } from "../show-all-employee-data/show-all-employee-data.component";
import { UpdateEmployeeNameComponent } from "../update-employee-name/update-employee-name.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ShowAllEmployeeDataComponent, UpdateEmployeeNameComponent, RouterOutlet]
})
export class HomeComponent {

}
