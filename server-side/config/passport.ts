/* Import Modules */

import passport from 'passport';
import LocalStrategy from 'passport-local';
import { getRepository } from 'typeorm';

/* Import Files */

import { Employee } from '../src/entities/Employee-Entity';
import { validatePassword } from '../utils/passportUtils';

/* Setting the Variables for the Model */

const repo = getRepository(Employee);
const User = repo;

/* Passport Paraneters/Arguments Set Separately */

const loginFields = {
    usernameField: 'Username',
    passwordField: 'Password'
};

const verification = async (username, password, done) => {

    const user = await User.findOne({Username: username});

    try {

        if (!user) { return done(null, false) }

        const isValidated = await validatePassword(password);

        if (!isValidated) {
            return done(null, user);
        } else {
            return done(null, false)
        }

    } catch (error) {

        done(error);
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