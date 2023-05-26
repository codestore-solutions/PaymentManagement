import { Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native';
import { paymentCheckout } from '../services/httpServices/checkoutService';

export default function PaymentScreen() {

    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);


    const fetchPaymentSheetParams = async () => {
        const response = await paymentCheckout();
        const { paymentIntent, ephemeralKey, customer, publishableKey } = await response.json();
        return {
            paymentIntent,
            ephemeralKey,
            customer,
            publishableKey,
        };
    };


    const initializePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer,
            publishableKey,
        } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
            //methods that complete payment after a delay, like SEPA Debit and Sofort.
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'Jane Doe',
            }
        });
        if (!error) {
            setLoading(true);
        }
    };


    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
        }
    };


    useEffect(() => {
        initializePaymentSheet();
    }, []);


    return (
        <Button
            disabled={loading}
            title="Checkout"
            onPress={openPaymentSheet}
        />
    )
}