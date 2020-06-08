/* Import Modules */

import 'dotenv/config';
import { Pool } from 'pg';
import { createConnection } from 'typeorm';

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

/* export const connect = createConnection({
    type: 'postgres',
    host: company.portal,
    port: +database.port,
    schema: database.strategy,
    username: database.name,
    password: 'N}{2VHQ7x]q2',
    entities: [
        __dirname + '../src/entities'
    ],
    synchronize: true,
    logging: 'all'
}); */