import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import LeagueScreen from '../screens/League';
import TeamScreen from '../screens/Team';
import StandingsScreen from '../screens/Standings';

const Stack = createStackNavigator();

type RootStackParamsList = {
    home: { idLeague: number; season: number };
    standing: { idLeague: number; season: number };
};

type HomeStackParamsList = {
    team: { idTeam: number };
};

function TeamNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="team">
            <Stack.Screen name="team" component={TeamScreen} />
        </Stack.Navigator>
    );
}

function HomeNavigator() {
    return (
        <Stack.Navigator headerMode="none" initialRouteName="main">
            <Stack.Screen name="main" component={HomeScreen} />
            <Stack.Screen name="standing" component={StandingsScreen} />
            <Stack.Screen name="teamInfo" component={TeamNavigator} />
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

export declare type HomeNavigationProps = RouteProp<
    HomeStackParamsList,
    'team'
>;
