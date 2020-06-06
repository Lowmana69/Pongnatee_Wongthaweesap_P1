/* Import Module */

import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany, ManyToOne } from 'typeorm';
import { IsInt, IsString, IsEmail, MaxLength} from 'class-validator';

/* Import Files */

import { UserRole } from './Role-Entity';
import { Reimbursement } from './Reimbursement-Entity';

/* Export The Employee Class */

@Entity()
@Unique(['Username', 'Email'])
export class Employee {

    @PrimaryGeneratedColumn({
        name: 'ers_users_id'
    })
    @IsInt()
    @ManyToOne(type => Reimbursement, (Id: Reimbursement) => Id.Author)
    @ManyToOne(type => Reimbursement, (Id: Reimbursement) => Id.Resolver)
    Id:          number;

    @Column('varchar', {
        name: 'ers_username',
        length: 50,
        unique:true
    })
    @IsString()
    @MaxLength(50)
    Username:    string;

    @Column('varchar', {
        name: 'ers_password',
        length: 50
    })
    @IsString()
    @MaxLength(50)
    Password:    string;

    @Column('varchar', {
        name: 'user_first_name',
        length: 100
    })
    @IsString()
    @MaxLength(100)
    firstName:   string;

    @Column('varchar', {
        name: 'user_last_name',
        length: 100
    })
    @IsString()
    @MaxLength(100)
    lastName:    string;

    @Column('varchar', {
        name: 'user_email',
        length: 150,
        unique: true
    })
    @IsString()
    @IsEmail()
    @MaxLength(150)
    Email:       string;

    @Column('int', {
        name: 'user_role_id'
    })
    @IsInt()
    @OneToMany(type => UserRole, (Role: UserRole) => Role.RoleId)
    Role:        number;

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