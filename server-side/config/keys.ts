/* Exporting Keys to be used */

exports.company = {
    employee: process.env.COMPANY_EMPLOYEE,
    manager: process.env.COMPANY_FINANCE_MANAGER,
    supervisor: process.env.COMPANY_SUPERVISOR,
    auditor: process.env.COMPANY_AUDITOR,
    human_resources: process.env.COMPANY_HUMAN_RESOURCES,
    portal: process.env.COMPANY_ACCESS_PORTAL,
    primary: process.env.COMPANY_ACCESS_PRIMARY
};

exports.database = {
    name: process.env.DATABASE_ACCESS_PORTAL,
    port: process.env.DATABASE_PORT,
    hostess: process.env.DATABASE_HOSTESS,
    private: process.env.DATABASE_ACCESS_KEY
};

exports.local = {
    pin: process.env.LOCALHOST
}