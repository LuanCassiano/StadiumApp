import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import LeagueScreen from '../screens/League';
import TeamScreen from '../screens/Team';
import StandingsScreen from '../screens/Standings';
import TeamPlayersScreen from '../screens/TeamPlayers';

import { ColorPallete } from '../global/Colors';

import { FontFamily } from '../global/FontFamily';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

type RootStackParamsList = {
    home: { idLeague: number; season: number };
    standing: { idLeague: number; season: number };
};

type HomeStackParamsList = {
    team: { idTeam: number; idLeague: number; season: number };
};

function TeamNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="team"
            tabBarOptions={{
                labelStyle: { fontSize: 16, fontFamily: FontFamily.BOLD },
                inactiveTintColor: ColorPallete.WHITE,
                activeTintColor: ColorPallete.SECONDARY,
                style: { backgroundColor: '#131313', height: 70 },
                tabStyle: { marginBottom: 25 },
            }}
        >
            <Tab.Screen
                name="team"
                component={TeamScreen}
                options={{ tabBarLabel: 'Equipe' }}
            />
            <Tab.Screen
                name="players"
                component={TeamPlayersScreen}
                options={{ tabBarLabel: 'Jogadores' }}
            />
        </Tab.Navigator>
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
