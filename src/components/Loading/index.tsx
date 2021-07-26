import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles';

import { ColorPallete } from '../../global/Colors';

const Loading: React.FC = () => {
    return (
        <Styled.Container>
            <ActivityIndicator size="large" color={ColorPallete.SECONDARY} />
        </Styled.Container>
    );
};

export default Loading;
