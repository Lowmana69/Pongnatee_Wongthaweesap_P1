/* Import Module */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsInt, IsString, MaxLength } from 'class-validator';

/* Import Files*/

import { Reimbursement } from './Reimbursement-Entity';


/* Export Reimbursement Status Class */

@Entity()
export class ReimbursementStatus {

    @PrimaryGeneratedColumn({
        name: 'reimb_status_id'
    })
    @IsInt()
    @ManyToOne(type => Reimbursement, (StatusId: Reimbursement) => StatusId.Status)
    StatusId:   number;

    @Column('varchar', {
        name:'reimb_status',
        length: 30,
        default: 'Pending'
    })
    @IsString()
    @MaxLength(30)
    Status:     string;

    static from(obj: ReimbursementStatusRow): ReimbursementStatus {
        const status = new ReimbursementStatus(
            obj.reimb_status_id,
            obj.reimb_staus,
        );
        return status;
    }

    constructor(
        StatusId:  number,
        Status:    string,
    ) {
        this.StatusId   = StatusId;
        this.Status     = Status;
    }
}

/* Export The ReimbursementStatusRow Interface */

export interface ReimbursementStatusRow {
    reimb_status_id:    number;
    reimb_staus:        string;
}