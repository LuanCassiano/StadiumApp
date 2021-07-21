import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/FontFamily';

export const Container = styled.View`
    flex: 1;
    background-color: #1f1f1f;
`;

export const Content = styled.View`
    padding: 20px 0px 0px 20px;
`;

export const ActionButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const IconButton = styled.Image`
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

export const ActionButtonText = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.REGULAR};
    color: ${ColorPallete.SECONDARY};
`;
