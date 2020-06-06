/* Import Module */

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsInt, IsString, IsCurrency, IsDate, IsDateString, MaxLength } from 'class-validator';

/* Import Files */

import { ReimbursementStatus } from './Status-Entity';
import { ReimbursementType } from './Type-Entity';
import { Employee } from './Employee-Entity';
import { isDate } from 'util';

/* Export The Reimbursement Class */

@Entity()
export class Reimbursement {

    @PrimaryGeneratedColumn({
        name: 'reimb_id'
    })
    Id:           number;

    @Column('money', {
        name: 'reimb_amount',
        default: 0.00
    })
    @IsCurrency()
    Amount:       number;

    @Column('timestamp', {
        name: 'reimb_submitted'
    })
    @IsDate()
    @IsDateString()
    Submitted:    Date;

    @Column('timestamp', {
        name: 'reimb_resolved',
        nullable: true
    })
    @IsDate()
    @IsDateString()
    Resolved:     Date;

    @Column('varchar', {
        name: 'reimb_description',
        length: 250,
        nullable: true,
        default: 'Not Available'
    })
    @IsString()
    @MaxLength(250)
    Description:  string;

    @Column('varchar', {
        name: 'reimb_receipt',
        length: 250,
        nullable: true,
        default: 'Not Available'
    })
    @IsString()
    @MaxLength(250)
    Receipt:      string;

    @Column('int', {
        name: 'reimb_author'
    })
    @IsInt()
    @OneToMany(type => Employee, (Author: Employee) => Author.Id)
    Author:       number;

    @Column('int', {
        name: 'reimb_resolver',
        nullable: true
    })
    @IsInt()
    @OneToMany(type => Employee, (Resolver: Employee) => Resolver.Id)
    Resolver:     number;

    @Column('int', {
        name: 'reimb_status_id'
    })
    @IsInt()
    @OneToMany(type => ReimbursementStatus, (Status: ReimbursementStatus) => Status.StatusId)
    Status:       number;

    @Column('int', {
        name: 'reimb_type_id'
    })
    @IsInt()
    @OneToMany(type => ReimbursementType, (Type: ReimbursementType) => Type.TypeId)
    Type:         number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: ReimbursementRow): Reimbursement {
        const reimbursement = new Reimbursement(
            obj.reimb_id,
            obj.reimb_amount,
            new Date (obj.reimb_submitted),
            new Date (obj.reimb_resolved),
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_author,
            obj.reimb_resolver,
            obj.reimb_status_id,
            obj.reimb_type_id
        );
        return reimbursement;
    }

    constructor(
        Id:           number,
        Amount:       number,
        Submitted:    Date,
        Resolved:     Date,
        Description:  string,
        Receipt:      string,
        Author:       number,
        Resolver:     number,
        Status:       number,
        Type:         number
    ) {
        this.Id             = Id;
        this.Amount         = Amount;
        this.Submitted      = Submitted;
        this.Resolved       = Resolved;
        this.Description    = Description;
        this.Receipt        = Receipt;
        this.Author         = Author;
        this.Resolver       = Resolver;
        this.Status         = Status;
        this.Type           = Type;
    }
}

/* Export The ReimbursementRow Interface */

export interface ReimbursementRow {
    reimb_id:               number;
    reimb_amount:           number;
    reimb_submitted:        string;
    reimb_resolved:         string;
    reimb_description:      string;
    reimb_receipt:          string;
    reimb_author:           number;
    reimb_resolver:         number;
    reimb_status_id:        number;
    reimb_type_id:          number;
}