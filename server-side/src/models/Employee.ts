/* Export The Employee Class */

export class Employee {
    Id:          number;
    Username:    string;
    Password:    string;
    firstName:   string;
    lastName:    string;
    Email:       string;
    Role:        number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: EmployeeRow): Employee {
        const employee = new Employee(
            obj.ers_users_id,
            obj.ers_username,
            obj.ers_password,
            obj.user_first_name,
            obj.user_last_name,
            obj.user_email,
            obj.user_role_id
        );
        return employee;
    }

    constructor(
        Id:          number,
        Username:    string,
        Password:    string,
        firstName:   string,
        lastName:    string,
        Email:       string,
        Role:        number
    ) {
        this.Id        = Id;
        this.Username  = Username;
        this.Password  = Password;
        this.firstName = firstName;
        this.lastName  = lastName;
        this.Email     = Email;
        this.Role      = Role;
    }
}

/* Export The EmployeeRow Interface */

export interface EmployeeRow {
    ers_users_id:               number;
    ers_username:               string;
    ers_password:               string;
    user_first_name:            string;
    user_last_name:             string;
    user_email:                 string;
    user_role_id:               number;
}