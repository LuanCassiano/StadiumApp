import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { store, persistor } from './store';

import App from './App';

const Root: React.FC = () => {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" backgroundColor="#151a25" />
            <App />
        </Provider>
    );
};

export default Root;
