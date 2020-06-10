/* Import Modules */

import passport from 'passport';
import LocalStrategy from 'passport-local';

/* Import Files */

import { validatePassword } from '../utils/passportUtils';
import { db } from './database';
import { EmployeeRow } from '../src/models/Employee';

/* Passport Paraneters/Arguments Set Separately */

const loginFields = {
    usernameField: 'Username',
    passwordField: 'Password'
};

const verification = async (username, password, done) => {
    console.debug("Login process:", username);

      .then((result)=> {
        return done(null, result);
      })

    const sql = `SELECT ers_users_id, user_first_name, user_last_name, user_email, user_role_id \
    FROM users WHERE user_email = $1 AND ers_password = $2`;

    try {

        const result = await db.query<EmployeeRow> (sql, [username, password])
            .then((result) => { return done(null, result) });

        const isValidated = await validatePassword(user_password, password);

        if (!isValidated) {
            return done(null, result);
        } else {
            return done(null, false)
        }

    } catch (error) {

        console.error("/login: " + err);
        return done(null, false, {message:'Please Check Your Email and Password'});
    }
};

/* Setting Up Strategy for Passport */

const strategy = new LocalStrategy(loginFields, verification);

/* Setting Up Passport */

passport.use(strategy);

/* Passport Serialization && Deserialization */

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    const user = User.findByIds(userId)
    try {
        done(null, user);
    } catch (error) {
        done(error);
    }
});

    


passport.serializeUser((user, done)=>{
    log.debug("serialize ", user);
    done(null, user.user_id);
  });

  passport.deserializeUser((id, done)=>{
    log.debug("deserualize ", id);
    db.one("SELECT user_id, user_name, user_email, user_role FROM users " +
            "WHERE user_id = $1", [id])
    .then((user)=>{
      //log.debug("deserializeUser ", user);
      done(null, user);
    })
    .catch((err)=>{
      done(new Error(`User with the id ${id} does not exist`));
    })
  });