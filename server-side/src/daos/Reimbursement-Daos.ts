/* Import Files */

import { db } from '../../config/database';
import { Reimbursement, ReimbursementRow } from '../models/Reimbursement';

/* =============== READ / RETRIEVE ============= */

/* GET */

export function getAllReimbursements (): Promise<Reimbursement[]> {

    const sql = 'SELECT * FROM ers_reimbursement ORDER BY reimb_id';

    return db.query<ReimbursementRow> (sql, []).then( result => {

        const rows: ReimbursementRow[] = result.rows;

        const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));

        return reimbursements;
    });
};

/* GET */

export function getAllReimbursementByUserID (reimb_author: number): Promise<Reimbursement[]> {

    const sql = 'SELECT * FROM ers_reimbursement WHERE reimb_author = $1';

    return db.query<ReimbursementRow> (sql, [reimb_author]).then( result => {

        const rows: ReimbursementRow[] = result.rows;

        const reimbursements: Reimbursement[] = rows.map(row => Reimbursement.from(row));

        return reimbursements;
    });
};

/* GET */

/* GET */

/* ==================== CREATE ================== */

/* POST */

export function createNewReimbursement (reimbursement: Reimbursement): Promise<Reimbursement> {

    const sql = `INSERT INTO ers_reimbursement (reimb_amount, reimb_submitted, \
        reimb_resolved, reimb_description, reimb_receipt, reimb_author, \
        reimb_resolver, reimb_status_id, reimb_type_id) VALUES \
        ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`;

    const params = [
        reimbursement.Amount,
        reimbursement.Submitted.toDateString(),
        reimbursement.Resolved.toDateString(),
        reimbursement.Description,
        reimbursement.Receipt, reimbursement.Author,
        reimbursement.Resolver, reimbursement.Status,
        reimbursement.Type
    ];

    return db.query<ReimbursementRow>(sql, params)
        .then(result => result.rows.map(row => Reimbursement.from(row))[0]);
};

/* ===================== UPDATE ================= */

/* PATCH */

export function updateReimbursement (reimbursement: Reimbursement): Promise<Reimbursement> {

    const sql = `UPDATE ers_reimbursement SET reimb_amount = COALESCE ($1, reimb_amount), \
    reimb_submitted = COALESCE ($2, reimb_submitted), \
    reimb_resolved = COALESCE ($3, reimb_resolved), \
    reimb_description = COALESCE ($4, reimb_description), \
    reimb_receipt = COALESCE ($5, reimb_receipt), \
    reimb_resolver = COALESCE ($6, reimb_resolver), \
    reimb_status_id = COALESCE ($7, reimb_status_id), \
    reimb_type_id = COALESCE ($8, reimb_type_id) WHERE \
    reimb_id = $9 AND reimb_author = $10 RETURNING *`;

    const submitted = reimbursement.Submitted && reimbursement.Submitted.toDateString();
    const resolved = reimbursement.Resolved && reimbursement.Resolved.toDateString();
    
    const params = [
        reimbursement.Amount,
        submitted,
        resolved,
        reimbursement.Description,
        reimbursement.Receipt, reimbursement.Resolver,
        reimbursement.Status, reimbursement.Type,
        reimbursement.Id, reimbursement.Author
    ];

    return db.query<ReimbursementRow>(sql, params)
        .then(result => result.rows.map(row => Reimbursement.from(row))[0]);
};