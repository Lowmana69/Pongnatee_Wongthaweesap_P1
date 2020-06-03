/* Import Modules */

import 'dotenv/config';
import express from 'express';
import passport from 'passport';
import session from 'express-session';

/* Import Files */

import { keys } from '../config/keys';


/* Initialize Express */

const app = express();

/* Setting Up PORT */

const PORT = process.env.PORT || keys.local.pin;
app.set('PORT', PORT);

/* Registering Middleware */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Setting Up Passport */

app.use(passport.initialize());
app.use(passport.session());

/* Route Connections */



/* Initialize Port to Listen */

app.listen(PORT, () => {
    console.log(`Home app running at http://localhost:${PORT}`);
});