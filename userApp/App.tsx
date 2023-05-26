import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { StripeProvider } from '@stripe/stripe-react-native';
import Config from 'react-native-config';
import PaymentScreen from './screens/PaymentScreen';



function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const publishableKey = Config.PUBLISHABLE_KEY ?? "123";


    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <StripeProvider
                publishableKey={publishableKey}
                merchantIdentifier="merchant.identifier"
                urlScheme="your-url-scheme">
                <PaymentScreen/>
            </StripeProvider>
        </SafeAreaView>
    );
}


export default App;
