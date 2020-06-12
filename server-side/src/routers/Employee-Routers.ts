/* Import Modules */

import express, { response } from 'express';

/* Import Files */

import * as employeesService from '../services/Employee-Services';

/* Export Employee Router */

export const employeesRouter = express.Router();

/* =============== READ / RETRIEVE ============= */

/* GET */

employeesRouter.get('', async (request, response, next) => {

    try {

        const employees = await employeesService.getAllEmployees();

        response.set('Content-Type', 'application/json');

        response.json(employees);

        next();

    } catch (error) {

        response.sendStatus(500);

        next();

    } 
});

/* GET */

employeesRouter.get('/:id', async (request, response, next) => {

    const employeeId = +request.params.id;

    try {

        const checkEmployeeId = await employeesService.getEmployeeByID(employeeId);

        if (!checkEmployeeId) {

            response.sendStatus(404);

        } else {

            response.json(employeeId);
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

employeesRouter.post('/register', async (request, response, next) => {

    
    try {
        const employeeInfo = request.body;
    
        const newEmployee = await employeesService.createNewEmployee(employeeInfo);

        response.sendStatus(201).json(newEmployee);

        next();

    } catch (error) {

        response.sendStatus(500);

        next();
    }
});

/* ===================== UPDATE ================= */

/* PATCH */

employeesRouter.patch('', async (request, response, next) => {

    
    try {
        const employeeInfo = request.body;
        
        const employeeUpdate = await employeesService.updateEmployee(employeeInfo);

        if (employeeUpdate) {

            response.json(employeeUpdate);

        } else {

            response.sendStatus(404);

        }

        next();

    } catch (error) {

        response.sendStatus(500);

        next();
    }
});