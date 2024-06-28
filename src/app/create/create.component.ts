import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeeInterface, EmployeeInterfaceWithEarning } from '../app.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateEmployeeComponent {

  constructor(private router: Router) {}
  private httpClient = inject(HttpClient);

  onSubmit(form : NgForm)
  {
    // AddEmployee
    return this.httpClient.post<EmployeeInterface>('https://localhost:44342/api/Employee/AddEmployee', {
      employeeName: form.value.employeeName,
      dateOfBirth: form.value.employeeDOB,
      gender: form.value.employeeGender,
      department: form.value.employeeDepartment,
      designation: form.value.employeeDesignation,
      basicSalary: form.value.employeeBasicSalary

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
