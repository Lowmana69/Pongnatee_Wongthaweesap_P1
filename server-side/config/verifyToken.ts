
/* Import Modules */

import JWT from 'jsonwebtoken';

/* Import Files */

import keys, { access } from './keys';

/* Middleware to Protect your Token */

export const verification = async (request, response, next) => {
        const token = request.header('auth-token');
        if (!token) return response.sendStatus(401);

        // Verifying the token

        try {
            const verified = await JWT.verify(token, access.primary);
            request.user = verified;
            next();
        } catch(err) {
            response.sendStatus(400);
        }
};