import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeInterface } from '../app.model';

@Component({
  selector: 'app-update-employee-name',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee-name.component.html',
  styleUrl: './update-employee-name.component.css'
})
export class UpdateEmployeeNameComponent {

  constructor(private router: Router) {}
  private httpClient = inject(HttpClient);

  onSubmit(form : NgForm)
  {
    //console.log(form);
    // UpdateEmployee
    return this.httpClient.patch<EmployeeInterface>('https://localhost:44342/api/Employee/UpdateEmployeeName/' + form.value.employeeCode +'/'+ form.value.employeeNewName, {
      observe: null
    }).subscribe({
      next : (response) => {
        //console.log(response);
        this.router.navigateByUrl('');
      }
    });
  }

  onBack()
  {
    this.router.navigateByUrl('');
  }
  
}

