import React, { memo } from 'react';
import { IListSeason } from './interfaces/IListSeasons';

import * as Styled from './styles';

import { format } from '../../../utils/FormatDate';

const ListSeasons: React.FC<IListSeason> = ({
    item,
    onItemClick,
}: IListSeason) => {
    return (
        <Styled.ListContainer onPress={(): void => onItemClick(item)}>
            <Styled.ListContent>
                <Styled.ListTitle>{item.year}</Styled.ListTitle>
            </Styled.ListContent>

            <Styled.ListFooter>
                <Styled.CenterContent>
                    <Styled.ListLabel>Inicio</Styled.ListLabel>
                    <Styled.ListText>{format(item.start)}</Styled.ListText>
                </Styled.CenterContent>

                <Styled.CenterContent>
                    <Styled.ListLabel>Fim</Styled.ListLabel>
                    <Styled.ListText>{format(item.end)}</Styled.ListText>
                </Styled.CenterContent>
            </Styled.ListFooter>
        </Styled.ListContainer>
    );
};

export default ListSeasons;
