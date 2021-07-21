import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const Container = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight - 100}px;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.TouchableOpacity`
    width: 300px;
    height: 400px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    elevation: 5;
    background-color: #2d2d2d;
`;

export const CardMedia = styled.Image`
    width: 200px;
    height: 200px;
`;

export const CardBody = styled.View`
    margin-top: 20px;
`;

export const CardText = styled.Text`
    font-size: 20px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.SECONDARY};
`;
