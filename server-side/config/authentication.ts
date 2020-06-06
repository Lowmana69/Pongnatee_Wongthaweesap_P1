export const userAuthentication = async (request, response, next) => {
    if (request.isAuthenticated()) {
        next();
    } else {
        response.sendStatus(401);
    }
};

export const adminAuthentication = async (request, response, next) => {
    if (request.isAuthenticated() && request.user.admin) {
        next();
    } else {
        response.sendStatus(401);
    }
};