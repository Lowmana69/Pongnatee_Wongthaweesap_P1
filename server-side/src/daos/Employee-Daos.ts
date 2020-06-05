/* Import Files */

import { db } from '../../config/database';
import { Employee, EmployeeRow } from '../models/Employee';

/* =============== READ / RETRIEVE ============= */

/* GET */

export async function getAllEmployees (): Promise<Employee[]> {

    const sql = 'SELECT * FROM ers_users ORDER BY ers_users_id';

    return db.query<EmployeeRow> (sql, []).then(result => {

        const rows: EmployeeRow[] = result.rows;

        const employees: Employee[] = rows.map(row => Employee.from(row));

        return employees;

    }).catch(err => {

        return undefined;

    });

};

/* GET */

export function getEmployeeByID (id: number): Promise<Employee> {

    const sql = 'SELECT * FROM ers_users WHERE ers_users_id = $1';

    return db.query<EmployeeRow>(sql, [id])
        .then(result => result.rows.map(row => Employee.from(row))[0]);
};

/* GET */

/* GET */

/* ==================== CREATE ================== */

/* POST */

export function createNewEmployee (employee: Employee): Promise<Employee> {

    const sql = `INSERT INTO ers_users (ers_username, ers_password, user_first_name \
        user_last_name, user_email, user_role_id) VALUES ($1, $2, $3, $4, $5, $6) \
        RETURNING *`;

    const params = [employee.Username, employee.Password, employee.firstName,
        employee.lastName, employee.Email, employee.Role];

    return db.query<EmployeeRow>(sql, params)
        .then(result => result.rows.map(row => Employee.from(row))[0]);
};

/* ===================== UPDATE ================= */

/* PATCH */

export function updateEmployee (employee: Employee): Promise<Employee> {

    const sql = `UPDATE ers_users SET ers_username = COALESCE($1, ers_username), \
    ers_password = COALESCE($2, ers_password), user_first_name = COALESCE($3, user_first_name), \
    user_last_name = COALESCE($4, user_last_name), user_email = COALESCE($5, user_email), \
    user_role_id = COALESCE($6, user_role_id) WHERE ers_user_id = $7 RETURNING *`;

    const params = [employee.Username, employee.Password, employee.firstName,
        employee.lastName, employee.Email, employee.Role, employee.Id];

    return db.query<EmployeeRow>(sql, params)
        .then(result => result.rows.map(row => Employee.from(row))[0]);
};