import styled from 'styled-components/native';

import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

export const SectionMainChampionshipContainer = styled.View`
    margin: 20px 0px 20px 20px;
    padding: 20px;
    background-color: #131313;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`;

export const SectionMainChampionshipText = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.SECONDARY};
`;

export const ListItem = styled.TouchableOpacity`
    margin: 20px 20px 0px 0px;
    background-color: ${ColorPallete.WHITE};
    border-radius: 30px;
`;

export const ListItemMedia = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
`;
