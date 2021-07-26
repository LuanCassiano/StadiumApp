import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';

import * as Styled from './styles';

const Standings: React.FC = () => {
    return (
        <Styled.Container>
            <Header title="Tabela" />
        </Styled.Container>
    );
};

export default Standings;
