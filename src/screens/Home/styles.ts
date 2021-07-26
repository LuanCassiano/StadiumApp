import styled from 'styled-components/native';
import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/FontFamily';

export const Container = styled.View`
    flex: 1;
    background-color: #1f1f1f;
`;

export const Content = styled.View`
    padding: 20px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SectionCurrentChampionshipContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const LogoChampionship = styled.Image`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;

export const TitleChampionship = styled.Text`
    font-size: 20px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.SECONDARY};
`;

export const ButtonSeeTable = styled.TouchableOpacity`
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 10px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.WHITE};
`;
