export interface Reimbursement {
    Id?: number;
    Amount: number;
    Submitted: Date | string;
    Resolved: Date | string;
    Description: string;
    Receipt: string;
    Author: number;
    Resolver: number;
    Status: number;
    Type: number;
}