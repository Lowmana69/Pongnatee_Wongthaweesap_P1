/* Import Module */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsInt, IsString, MaxLength } from 'class-validator';

/* Import Files*/

import { Employee } from './Employee-Entity';

/* Export User Role Class */

@Entity()
export class UserRole {

    @PrimaryGeneratedColumn({
        name: 'ers_user_role_id'
    })
    @IsInt()
    @ManyToOne(type => Employee, (RoleId: Employee) => RoleId.Role)
    RoleId:     number;

    @Column('varchar', {
        name: 'user_role',
        length: 30,
        default: 'Probationary'
    })
    @IsString()
    @MaxLength(30)
    UserRole:   string;

    static from(obj: UserRoleRow): UserRole {
        const role= new UserRole(
            obj.ers_user_role_id,
            obj.user_role,
        );
        return role;
    }

    constructor(
        RoleId:      number,
        UserRole:    string,
    ) {
        this.RoleId    = RoleId;
        this.UserRole  = UserRole;
    }
}

/* Export The UserRoleRow Interface */

export interface UserRoleRow {
    ers_user_role_id:   number;
    user_role:          string;
}