import styled from 'styled-components/native';
import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

export const ListContainer = styled.View`
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    background-color: #2d2d2d;
`;

export const ListBody = styled.View`
    margin: 5px 0px 10px 0px;
    flex-direction: row;
`;

export const ListContent = styled.View`
    width: 50%;
    flex-direction: row;
`;

export const ListLabel = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;

export const ListDivider = styled.View`
    width: 25%;
    align-items: flex-end;
`;
