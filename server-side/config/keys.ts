/* Exporting Keys to be used */

export const company = {
    employee: process.env.COMPANY_EMPLOYEE,
    manager: process.env.COMPANY_FINANCE_MANAGER,
    supervisor: process.env.COMPANY_SUPERVISOR,
    auditor: process.env.COMPANY_AUDITOR,
    human_resources: process.env.COMPANY_HUMAN_RESOURCES,
    portal: process.env.COMPANY_ACCESS_PORTAL,
    primary: process.env.COMPANY_ACCESS_PRIMARY,
    empKey: process.env.COMPANY_EMPLOYEE_KEY,
    resKey: process.env.COMPANY_RESOUCE_KEY,
    finKey: process.env.COMPANY_MANAGER_KEY
};

export const database = {
    name: process.env.DATABASE_ACCESS_PORTAL,
    port: process.env.DATABASE_PORT,
    hostess: process.env.DATABASE_HOSTESS,
    private: process.env.DATABASE_ACCESS_KEY,
    strategy: process.env.DATABASE_STRATEGY
};

export const local = {
    pin: process.env.LOCALHOST,
};

export const access = {
    primary: process.env.ACCESS_TOKEN,
    secondary: process.env.REFESH_TOKEN
}