import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { HomeNavigationProps } from '../../routes';

// import { Container } from './styles';

const Team: React.FC = () => {
    const route = useRoute<HomeNavigationProps>();

    console.tron.log('route', route.params.idTeam);

    return <View />;
};

export default Team;
