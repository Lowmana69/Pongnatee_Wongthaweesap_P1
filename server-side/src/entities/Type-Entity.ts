/* Import Module */

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsInt, IsString, MaxLength } from 'class-validator';

/* Import Files*/

import { Reimbursement } from './Reimbursement-Entity'

/* Export ReimBursement Type Class */

@Entity()
export class ReimbursementType {

    @PrimaryGeneratedColumn({
        name: 'reimb_type_id'
    })
    @IsInt()
    @ManyToOne(type => Reimbursement, (TypeId: Reimbursement) => TypeId.Type)
    TypeId:     number;

    @Column('varchar', {
        name: 'reimb_type',
        length: 30,
        default: 'Unknown'
    })
    @IsString()
    @MaxLength(30)
    Type:       string;

    static from(obj: ReimbursementTypeRow): ReimbursementType {
        const type = new ReimbursementType(
            obj.reimb_type_id,
            obj.reimb_type,
        );
        return type;
    }

    constructor(
        TypeId:  number,
        Type:    string,
    ) {
        this.TypeId   = TypeId;
        this.Type     = Type;
    }
};

/* Export The ReimbursementTypeRow Interface */

export interface ReimbursementTypeRow {
    reimb_type_id:      number;
    reimb_type:         string;
};