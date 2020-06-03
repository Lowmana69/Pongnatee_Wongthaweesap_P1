/* Export The Reimbursement Class */

export class Reimbursement {
    Id:           number;
    Amount:       number;
    Submitted:    Date;
    Resolved:     Date;
    Description:  string;
    Receipt:      string;
    Author:       number;
    Resolver:     number;
    Status:       number;
    Type:         number;

    /**
     * Static function for creating a Person instance from the structure the
     * database gives us
     */

    static from(obj: ReimbursementRow): Reimbursement {
        const reimbursement = new Reimbursement(
            obj.reimb_id,
            obj.reimb_amount,
            new Date (obj.reimb_submitted),
            new Date (obj.reimb_resolved),
            obj.reimb_description,
            obj.reimb_receipt,
            obj.reimb_author,
            obj.reimb_resolver,
            obj.reimb_status_id,
            obj.reimb_type_id
        );
        return reimbursement;
    }

    constructor(
        Id:           number,
        Amount:       number,
        Submitted:    Date,
        Resolved:     Date,
        Description:  string,
        Receipt:      string,
        Author:       number,
        Resolver:     number,
        Status:       number,
        Type:         number
    ) {
        this.Id             = Id;
        this.Amount         = Amount;
        this.Submitted      = Submitted;
        this.Resolved       = Resolved;
        this.Description    = Description;
        this.Receipt        = Receipt;
        this.Author         = Author;
        this.Resolver       = Resolver;
        this.Status         = Status;
        this.Type           = Type;
    }
}

/* Export The ReimbursementRow Interface */

export interface ReimbursementRow {
    reimb_id:               number;
    reimb_amount:           number;
    reimb_submitted:        string;
    reimb_resolved:         string;
    reimb_description:      string;
    reimb_receipt:          string;
    reimb_author:           number;
    reimb_resolver:         number;
    reimb_status_id:        number;
    reimb_type_id:          number;
}