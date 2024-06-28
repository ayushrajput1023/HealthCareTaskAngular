import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { EmployeeInterface, EmployeeInterfaceWithEarning } from '../app.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-all-employee-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-all-employee-data.component.html',
  styleUrl: './show-all-employee-data.component.css'
})
export class ShowAllEmployeeDataComponent implements OnInit {

  allEmployee: EmployeeInterfaceWithEarning[] = [];

  private httpClient = inject(HttpClient);
  
  ngOnInit(): void {
     //GetAllEmployee
    this.httpClient.get<EmployeeInterfaceWithEarning[]>('https://localhost:44342/api/Employee/GetAllEmployee').subscribe({
      next : (response) => {
        //console.log(response);
        this.allEmployee = response;
      }
    });
  }
}
