import styled from 'styled-components/native';

import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

export const Content = styled.View`
    padding: 20px;
`;

export const SubTitle = styled.Text`
    font-size: 14px;
    font-family: ${FontFamily.REGULAR};
    color: ${ColorPallete.SECONDARY};
`;

export const ListContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const Card = styled.TouchableOpacity`
    margin: 5px;
    width: 47%;
    background-color: #131313;
    padding: 20px;
    border-radius: 15px;
`;

export const CardContent = styled.View`
    align-items: center;
`;

export const CardMedia = styled.Image`
    width: 40px;
    height: 40px;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;
