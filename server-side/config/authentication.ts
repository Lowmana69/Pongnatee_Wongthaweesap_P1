import JWT, { JsonWebTokenError } from "jsonwebtoken";

import { access } from './keys';

/* checkAuthenticated */

export const checkAuthenticated = async (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    } else {
        response.sendStatus(401);
    }
};

export const checkNotAuthenticated = (request, response, next) => {
    if (request.isAuthenticated()) {
        return response.redirect('/');
    }
    
    next();
}
export const adminAuthentication = async (request, response, next) => {
    if (request.isAuthenticated()) {
       if (request.body.role === "Manager" || 2) {
           next();
       }
    } else {
        response.sendStatus(403);
    }
};

/* Checking Authentication of Token */

export const authenticationToken = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Want to get the Token from inside of BEARER
    // object

    if (token == null) return response.sendStatus(401);

    JWT.verify(token, access.primary, (err, user) => {
        if (err) return response.sendStatus(403);
        request.user = user;
        next();
    });
};
