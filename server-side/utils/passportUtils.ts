import crypto from 'crypto';
import 'node';

export const validatePassword = async (password, hash, salt) => {
    const hashVerification = crypto.pbkdf2Sync(password, salt,
         10000, 64, 'sha512').toString('hex');
    return hash === hashVerification;
};

export const genPassword = async (password) => {
    const salt = crypto.randomBytes(32).toString('hex');
    const genHash = crypto.pbkdf2Sync(password, salt,
        10000, 64, 'sha512').toString('hex');
    return {
        salt: salt,
        hash: genHash
    }
};