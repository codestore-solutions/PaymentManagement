import Http from './httpCommon';


export const paymentCheckout = async () => {
    return Http.post(`payment/checkout`, {
        headers: {
          'Content-Type': 'application/json',
        }
    })
};


export const getUserPayment = async (userId: string) => {
    return Http.get(`payment/user/${userId}`);
};
