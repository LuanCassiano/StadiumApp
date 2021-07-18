import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LeagueScreen from '../screens/League';

const Stack = createStackNavigator();

function OnBoardingNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="league">
            <Stack.Screen name="league" component={LeagueScreen} />
        </Stack.Navigator>
    );
}

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
            <Stack.Screen name="onBoarding" component={OnBoardingNavigator} />
            <Stack.Screen name="home" component={HomeNavigator} />
        </Stack.Navigator>
    );
}
