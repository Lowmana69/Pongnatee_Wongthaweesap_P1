/* Import Modules */

import 'dotenv/config';
import Sequelize from 'sequelize';
import { Pool } from 'pg';

/* Import Files */

import { database, company } from './keys';

/* Connecting to the Database */

export const db = new Pool({
    database: database.name,
    port: database.port,
    host: company.portal,
    user: database.name,
    password:database.private
});

/* Give Sequelize access to the Database */

const sequelize = new Sequelize(
  database.name,
  'username',
  'password', {
    host: database.hostess,
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

sequelize
  .authenticate( async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});