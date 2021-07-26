import styled from 'styled-components/native';
import { ColorPallete } from '../../../global/Colors';
import { FontFamily } from '../../../global/FontFamily';

export const ListItemContainer = styled.View`
    flex: 1;
    padding: 10px 0px;
    margin: 5px 0px;
    justify-content: space-between;
    flex-direction: row;
`;

export const ListItem = styled.TouchableOpacity`
    width: 50%;
    flex-direction: row;
    align-items: center;
`;

export const ItemFlexGrow = styled.View`
    width: 0;
    flex-grow: 1;
`;

export const ListItemLabel = styled.Text`
    font-size: 14px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.WHITE};
`;

export const ListItemMedia = styled.Image`
    width: 30px;
    height: 30px;
    margin: 0px 10px;
`;

export const ListContent = styled.View`
    width: 50%;
    flex-direction: row;
    align-items: center;
`;

export const ListDivider = styled.View`
    width: 25%;
    align-items: flex-end;
`;
