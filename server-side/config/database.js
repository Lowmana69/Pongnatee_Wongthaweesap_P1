/* Import Modules */

import Sequelize from 'sequelize';
import { Pool } from 'pg';

/* Import Files */

import keys from './keys';

/* Connecting to the Database */

export const db = new Pool({
    database: keys.database.name,
    port: keys.database.port,
    host: keys.company.portal,
    user: process.env.,
    password: process.env.
});

/* Give Sequelize access to the Database */

const sequelize = new Sequelize(
  keys.database.name,
  'username',
  'password', {
    host: keys.database.hostess,
    dialect: 'postgres'
});

/*
    Pool establish new connection to Postgres
    to run setup commands to client.
*/

db.on('connect', (client) => {
    client.query(`SET search_path TO my_schema, public`);
});

/* Testing Sequelize connection to the Database */

Sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });