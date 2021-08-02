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

export const SectionInfo = styled.View`
    background-color: #131313;
    padding: 20px;
    align-items: center;
    justify-content: center;
`;

export const SectionBody = styled.View`
    margin: 10px 0px;
`;

export const SectionMedia = styled.Image`
    width: 150px;
    height: 150px;
`;

export const SectionTitle = styled.Text`
    font-size: 24px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.SECONDARY};
`;

export const CardInfoContainer = styled.View`
    padding: 20px;
    background-color: #131313;
    border-radius: 15px;
    margin-bottom: 20px;
`;

export const CardInfoTitle = styled.Text`
    font-size: 20px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.SECONDARY};
`;

export const CardInfoRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0px;
`;

export const CardInfoLabel = styled.Text`
    font-size: 10px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;

export const CardInfoMedia = styled.Image`
    width: 100%;
    height: 250px;
    border-radius: 10px;
`;
