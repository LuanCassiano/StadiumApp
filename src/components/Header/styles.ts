import styled from 'styled-components/native';
import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/FontFamily';

export const Container = styled.View`
    padding: 30px 20px;
    background-color: #1c2331;
    elevation: 5;
`;

export const Content = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin: 0px 20px 0px 10px;
    align-items: center;
    justify-content: center;
`;

export const HeaderActionButtonIcon = styled.Image`
    width: 25px;
    height: 25px;
`;

export const Title = styled.Text`
    color: ${ColorPallete.SECONDARY};
    font-family: ${FontFamily.BLACK};
    font-size: 20px;
`;
