import bcrypt from 'bcryptjs';

import { db } from '../config/database';
import { EmployeeRow } from '../src/models/Employee';

export const validatePassword = async (user_assword, password) => {
    bcrypt.compare(user_assword, password, function(err, isMatch) {
        if (err) {
          throw err
        } else if (!isMatch) {
          console.log("Password doesn't match!")
        } else {
          console.log("Password matches!")
        }
      })
};

export const genPassword = async (password) => {
    
    const sqlOne = `SELECT ers_users_id FROM ers_users WHERE ers_username = $1`;
    const sqlTwo = `INSERT INTO ers_users (ers_users_id, ers_password, \
        user_first_name, user_last_name, users_email) \
        VALUES ($1, $2, $3, $4, $5)`;
    try {
            const hashPassword = await bcrypt.hash(request.body.password, 10);
            
            await JSON.stringify(
                db.query<EmployeeRow>(sqlOne, [request.body.username],
                    async (err, result) => {
                        if(result.rows[0]){
                            await response.redirect(‘/join’);
                        } else {
                            const params = [request.body.firstName,
                                request.body.lastName,
                                request.body.username,
                                hashPassword],;
                            db.query<EmployeeRow>(sqlTwo, params, async (err, result) => {
                                if  (err)   {
                                    console.log(err);
                                } else {

                                    response.redirect(‘/login’);
                                    return;
                                }
                            });
                        };
                    }
                )
            )
        response.sendStatus(201);
   } catch (error) {
       response.sendStatus(500);
   } 
};