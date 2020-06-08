/* Import Modules */

import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import passport from 'passport';
import session from 'express-session';

/* Import Files */

import { local, database } from '../config/keys';
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

/* Setting Up Express && PG Session */

const pgStore = require('connect-pg-simple')(session);

app.use(session({
    store: new pgStore({
        pool: db,
        schemaName: database.strategy,
        tableName: 'session',
    }),
    secret: local.litigation,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

/* Setting Up Passport */

app.use(passport.initialize());
app.use(passport.session());

/* Route Connections */

app.use('/users', employeesRouter);
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