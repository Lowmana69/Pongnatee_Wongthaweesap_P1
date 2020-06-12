export interface Reimbursement {
    Id?: number;
    Amount: number;
    Submitted: Date | string;
    Resolved: Date | string;
    Description: string;
    Receipt: string;
    Author: string | number;
    Resolver: string | number;
    Status: string | number;
    Type: number;
}