export const constants = {
    SEQUELIZE: 'SEQUELIZE',

    PAYMENT_REPOSITORY: 'PAYMENT_REPOSITORY',
    PAYMENT_DETAIL_REPOSITORY: 'PAYMENT_DETAIL_REPOSITORY',

    PRODUCT_REPOSITORY: 'PRODUCT_REPOSITORY',
    PRODUCT_SPECIFICATION_REPOSITORY: 'PRODUCT_SPECIFICATION_REPOSITORY',
    
    ADDRESS_REPOSITORY: 'ADDRESS_REPOSITORY',

    PRODUCT_INVENTORY_REPOSITORY: "PRODUCT_INVENTORY_REPOSITORY",

    USER_REPOSITORY: "USER_REPOSITORY",


    LOCAL_GUARD: 'local',
    MAIL_LOCAL_GUARD: 'mailLocal',
    APIS_PREFIX: 'api',
};


export const tableNameConstants = {
    NEW_PAYMENT: 'new_payments',
    BOOKING: 'bookings',
    USER: 'users',
    PAYMENT: 'payments',
    ADDRESS: 'address',
    PRODUCT: 'products',
    PRODUCT_INVENTORY: 'product_inventory',
    ATTRIBUTE: 'attribues',
    PRODUCT_ATTIBUTES: 'product_attributes'

};

export const PAYMENTStatus = [ 'cancel', 'pending', 'processing', 'exchanged', 'payment_failed']

export const persona = [ 'superadmin', 'customer', 'store']

export enum PaymentMode {
    CASH_ON_DELIVERY = 'cash on delivery',
    CREDIT_CARD = 'credit Card',
    DEBIT_CARD = 'debit Card',
    PAYPAL = 'paypal',
}

export const swaggerConstants = {
    SWAGGER_TITLE: 'PAYMENT processing module',
    SWAGGER_DESCRIPTION: 'PAYMENT processing module APIs description',
    SWAGGER_VERSION: '1.0',
}

export const errorMessages = {
    RECORDS_NOT_FOUND: 'No Record is Present in Database',
    ID_NOT_FOUND: 'No Record found with given id',
    
    USER_ID_NOT_FOUND: `The User Id doesn't exist`,
    USER_TYPE_ID_NOT_FOUND: `The User Type Id doesn't exist`,
    
    NO_USER_PRESENT_IN_DB: `No User is present in DB`,
    NO_USER_TYPE_EXIST_IN_DB: `No User type Exists in DB`,

    NO_ID_TYPE_EXIST_IN_DB: `No Id Type Exists in DB`,
    ID_TYPE_NOT_FOUND: `Id Type Not Found`,
};