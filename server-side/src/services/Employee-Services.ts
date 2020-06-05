/* Import Files */

import { Employee } from '../models/Employee';
import * as employeeDao from '../daos/Employee-Daos';

/* ============== READ / RETRIEVE ============== */

/* GET */

export function getAllEmployees (): Promise<Employee[]> {
    return employeeDao.getAllEmployees();
};

/* GET */

export function getEmployeeByID (id: number): Promise<Employee> {
    return employeeDao.getEmployeeByID(id);
};

/* GET */



/* GET */



/* ================== CREATE =================== */

/* POST */
export function createNewEmployee (employee: any): Promise<Employee> {

    const newEmployee = new Employee(
        undefined, employee.Username, employee.Password,
        employee.firstName, employee.lastName,
        employee.Email, employee.Role
    );

    const params = ( employee.Username, employee.Password,
        employee.firstName, employee.lastName,
        employee.Email, employee.Role
    );

    if (params) {
        return employeeDao.createNewEmployee(newEmployee);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
};


/* =================== UPDATE ================== */

/* PATCH */

export function updateEmployee (input: any): Promise<Employee> {

    const employee = new Employee(
        input.Id, input.Username, input.Password,
        input.firstName, input.lastName, input.Email,
        input.Role
    );

    if (!employee.Id) {
        throw new Error('400');
    }

    return employeeDao.updateEmployee(employee);
};
