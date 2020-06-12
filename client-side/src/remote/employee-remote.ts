import { remoteAxios } from './axios'
import { Employee } from '../models/Employee';


export const getAllEmployees = async () => {
    const response = await remoteAxios.get<Employee[]>('/.....');
    return response.data.map(employee => {
        // Replace string birthdate with Date object
        return employee;
    });
}

export const createEmployee = async (employee: Employee) => {
    const response = await remoteAxios.post('/.....', employee);
    return true;
}