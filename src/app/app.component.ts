import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowAllEmployeeDataComponent } from "./show-all-employee-data/show-all-employee-data.component";
import { UpdateEmployeeNameComponent } from "./update-employee-name/update-employee-name.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, HeaderComponent, FormsModule]
})
export class AppComponent {
  title = 'HealthCareInformaticsAngular';
}
