import React, { memo } from 'react';

import * as Styled from './styles';

import { IListLeague } from './interfaces/IListLeagues';

const ListLeagues: React.FC<IListLeague> = ({
    item,
    onItemClick,
}: IListLeague) => {
    const { logo, name } = item.league;

    return (
        <Styled.Container>
            <Styled.Card onPress={(): void => onItemClick(item)}>
                <Styled.CardMedia source={{ uri: logo }} resizeMode="contain" />

                <Styled.CardBody>
                    <Styled.CardText>{name}</Styled.CardText>
                </Styled.CardBody>
            </Styled.Card>
        </Styled.Container>
    );
};

export default memo(ListLeagues);
