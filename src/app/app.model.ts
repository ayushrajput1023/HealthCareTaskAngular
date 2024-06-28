
export interface EmployeeInterface
{
    employeeCode: string,
    employeeName: string,
    dateOfBirth: string,
    gender: string,
    department: string,
    designation: string,
    basicSalary: number
}

export interface EmployeeInterfaceWithEarning
{
    employeeCode: string,
    employeeName: string,
    dateOfBirth: string,
    gender: string,
    department: string,
    designation: string,
    basicSalary: number,
    dearnessAllowance : number,
    conveyanceAllowance : number,
    houseRentAllowance : number,
    grossSalary : number,
    pt : number,
    totalSalary : number
}

