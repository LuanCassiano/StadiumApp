import styled from 'styled-components/native';
import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

export const ListContainer = styled.TouchableOpacity`
    background-color: #2d2d2d;
    margin: 10px 0px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    elevation: 5;
`;

export const ListContent = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ListFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const CenterContent = styled.View`
    align-items: center;
    justify-content: center;
`;

export const ListTitle = styled.Text`
    font-size: 24px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.SECONDARY};
`;

export const ListLabel = styled.Text`
    font-size: 14px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.SECONDARY};
`;

export const ListText = styled.Text`
    font-size: 10px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.SECONDARY};
`;
