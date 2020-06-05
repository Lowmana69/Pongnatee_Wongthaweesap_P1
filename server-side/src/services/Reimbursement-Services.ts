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
        reimbursement.Submitted,
        reimbursement.Resolved,
        reimbursement.Description,
        reimbursement.Receipt, reimbursement.Author,
        reimbursement.Resolver, reimbursement.Status,
        reimbursement.Type
    );

    const params = (
        reimbursement.Amount,
        reimbursement.Submitted,
        reimbursement.Resolved,
        reimbursement.Description,
        reimbursement.Receipt, reimbursement.Author,
        reimbursement.Resolver, reimbursement.Status,
        reimbursement.Type
    );

    if (params) {
        return reimbursementDao.createMewReimbursement(newReimbursement);
    } else {
        return new Promise((resolve, reject) => reject(422));
    }
};

/* =================== UPDATE ================== */

/* PATCH */

export function updateReimbursement (input: any): Promise<Reimbursement> {

    const reimbursement = new Reimbursement (
        input.Id, input.Author,
        input.Amount, input.Submitted,
        input.Resolved, input.Description,
        input.Receipt, input.Resolver,
        input.Status, input.Type
    );

    if (!reimbursement.Id) {
        throw new Error('400');
    }

    return reimbursementDao.updateReimbursment(reimbursement);
};