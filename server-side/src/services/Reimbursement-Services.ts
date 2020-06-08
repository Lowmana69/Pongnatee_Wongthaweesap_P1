/* Import Files */

import { Reimbursement } from '../models/Reimbursement';
import * as reimbursementDao from '../daos/Reimbursement-Daos';

/* ============== READ / RETRIEVE ============== */

/* GET */

export function getAllReimbursements (): Promise<Reimbursement[]> {
    return reimbursementDao.getAllReimbursements();
};

/* GET */

export function getAllReimbursementByUserID (reimb_author: number): Promise<Reimbursement[]> {
    return reimbursementDao.getAllReimbursementByUserID(reimb_author);
};

/* GET */


/* GET */



/* ================== CREATE =================== */

/* POST */

export function createNewReimbursement (reimbursement: any): Promise<Reimbursement> {

    const newReimbursement = new Reimbursement(
        undefined, reimbursement.Amount,
        new Date (reimbursement.Submitted),
        new Date (reimbursement.Resolved),
        reimbursement.Description,
        reimbursement.Receipt, reimbursement.Author,
        reimbursement.Resolver, reimbursement.Status,
        reimbursement.Type
    );

    const params = (
        reimbursement.Amount &&
        new Date (reimbursement.Submitted) &&
        new Date (reimbursement.Resolved) &&
        reimbursement.Description &&
        reimbursement.Receipt && reimbursement.Author &&
        reimbursement.Resolver && reimbursement.Status &&
        reimbursement.Type
    );

    if (params) {

        return reimbursementDao.createNewReimbursement(newReimbursement);

    } else {

        return new Promise((resolve, reject) => reject(422));
    }
};

/* =================== UPDATE ================== */

/* PATCH */

export function updateReimbursement (input: any): Promise<Reimbursement> {
    
    const submitted = input.Submitted && new Date(input.Submitted);
    const resolved = input.Resolved && new Date(input.Resolved);
    
    const reimbursement = new Reimbursement (
        input.Id, input.Author,
        input.Amount, submitted,
        input.Resolved, input.Description,
        input.Receipt, input.Resolver,
        input.Status, input.Type
    );

    if (!reimbursement.Id) {
        throw new Error('400');
    }

    return reimbursementDao.updateReimbursment(reimbursement);
};