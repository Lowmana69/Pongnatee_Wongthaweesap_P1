import { remoteAxios } from './axios'
import { Reimbursement } from '../models/Reimbursement';


export const getAllReimbursements= async () => {
    const response = await remoteAxios.get<Reimbursement[]>('/??????');
    return response.data.map(reimbursement => {
        // Replace string birthdate with Date object
        reimbursement.Submitted = new Date(reimbursement.Submitted);
        reimbursement.Resolved = new Date(reimbursement.Resolved);
        return reimbursement;
    });
}

export const createReimbursement = async (reimbursement: Reimbursement) => {
    const response = await remoteAxios.post('/?????', reimbursement);
    return true;
}