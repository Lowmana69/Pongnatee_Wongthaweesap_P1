/* Import Modules */

import 'dotenv/config';
import express from 'express';

/* Import Files */

import { local } from '../config/keys';
import { db } from '../config/database';
import { employeesRouter } from '../src/routers/Employee-Routers';
import { reimbursementsRouter } from '../src/routers/Reimbursement-Routers';

/* Initialize Express */

const app = express();

/* Setting Up PORT */

const PORT = process.env.PORT || local.pin;
app.set('PORT', PORT);

/* Registering Middleware */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Route Connections */

app.use('/employees', employeesRouter);
app.use('/tickets', reimbursementsRouter);

/* Error Handler */

/*
    Listen for signal - issued by closing the server with ctrl+c
    This releases the database connections prior to app being stopped
*/

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('Database pool closed');
    });
});

/* Initialize Port to Listen */

app.listen(PORT, () => {
    console.log(`Home app running at http://localhost:${PORT}`);
});