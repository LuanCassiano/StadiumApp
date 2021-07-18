import 'react-native-gesture-handler';

import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
    const navigationRef = useRef(null);

    return (
        <NavigationContainer ref={navigationRef}>
            <Routes />
        </NavigationContainer>
    );
};

export default App;
