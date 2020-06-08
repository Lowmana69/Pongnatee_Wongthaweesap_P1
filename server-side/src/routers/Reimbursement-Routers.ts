/* Import Modules */

import express from 'express';

/* Import Files */

import * as reimbursementsService from '../services/Reimbursement-Services';

/* Export Reimbursement Router */

export const reimbursementsRouter = express.Router();

/* =============== READ / RETRIEVE ============= */

/* GET */

reimbursementsRouter.get('', async (request, response, next) => {
    try {
        const reimbursements = await reimbursementsService.getAllReimbursements();
        response.json(reimbursements);
    } catch (error) {
        response.sendStatus(500);
    }
});

/* GET */

reimbursementsRouter.get('/:author', async (request, response, next) => {
    const reimbursementInfo = +request.params.author;
    try {
        const reimbursementByUserId = await reimbursementsService
            .getAllReimbursementByUserID(reimbursementInfo);
        if (!reimbursementByUserId) {
            response.sendStatus(404);
        } else {
            response.json(reimbursementByUserId);
        }
        next();
    } catch (error) {
        response.sendStatus(500);
        next();
    }
});

/* GET */

/* GET */

/* ==================== CREATE ================== */

/* POST */

reimbursementsRouter.post('/new', async (request, response, next) => {
    const reimbursmentInputs = request.body;
    try {
        const reimbursementInfo = await reimbursementsService
            .createNewReimbursement(reimbursmentInputs);
        response.status(201);
        response.json(reimbursementInfo);
        console.log('reimb route');
        next();
    } catch (error) {
        response.sendStatus(error);
        next();
    }
});

/* ===================== UPDATE ================= */

/* PATCH */

reimbursementsRouter.patch('', async (request, response, next) => {
    const reimbursementInput = request.body;
    try {
        const reimbursementUpdate = await reimbursementsService
            .updateReimbursement(reimbursementInput);
        if (reimbursementUpdate) {
            response.json(reimbursementUpdate);
        } else {
            response.sendStatus(404);
        }
        next();
    } catch (error) {
        response.sendStatus(500);
        next();
    }
});