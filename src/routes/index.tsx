import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LeagueScreen from '../screens/League';

const Stack = createStackNavigator();

type RootStackParamsList = {
    home: { idLeague: number; season: number };
};

function HomeNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="main">
            <Stack.Screen name="main" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="onBoarding">
            <Stack.Screen name="onBoarding" component={LeagueScreen} />
            <Stack.Screen name="home" component={HomeNavigator} />
        </Stack.Navigator>
    );
}

export declare type RootNavigationProps = RouteProp<
    RootStackParamsList,
    'home'
>;
