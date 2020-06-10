/* Import Modules */

import 'dotenv/config';
import { Pool } from 'pg';

/* Import Files */

import { database, company } from './keys';

/* Connecting to the Database */

export const db = new Pool({
    database: database.name,
    port: +database.port,
    host: company.portal,
    user: database.name,
    password: 'N}{2VHQ7x]q2'
});

/*
    Pool establish new connection to Postgres
    to run setup commands to client.
*/

db.on('connect', (client) => {
    client.query(`SET search_path TO my_schema, ers`);
});

