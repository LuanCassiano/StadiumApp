import React from 'react';

import * as Styled from './styles';

import { IListTeamsByGroup } from './interfaces/IListTeamsByGroup';

const ListTeamsByGroup: React.FC<IListTeamsByGroup> = ({
    item,
    onTeamSelected,
}: IListTeamsByGroup) => {
    return (
        <Styled.ListItemContainer>
            <Styled.ListItem onPress={(): void => onTeamSelected(item)}>
                <Styled.ListItemLabel>{item.rank}</Styled.ListItemLabel>
                <Styled.ListItemMedia
                    source={{ uri: item.team.logo }}
                    resizeMode="contain"
                />

                <Styled.ItemFlexGrow>
                    <Styled.ListItemLabel>
                        {item.team.name}
                    </Styled.ListItemLabel>
                </Styled.ItemFlexGrow>
            </Styled.ListItem>

            <Styled.ListContent>
                <Styled.ListDivider>
                    <Styled.ListItemLabel>{item.points}</Styled.ListItemLabel>
                </Styled.ListDivider>
                <Styled.ListDivider>
                    <Styled.ListItemLabel>
                        {item.all.played}
                    </Styled.ListItemLabel>
                </Styled.ListDivider>

                <Styled.ListDivider>
                    <Styled.ListItemLabel>{item.all.win}</Styled.ListItemLabel>
                </Styled.ListDivider>

                <Styled.ListDivider>
                    <Styled.ListItemLabel>{item.all.lose}</Styled.ListItemLabel>
                </Styled.ListDivider>
            </Styled.ListContent>
        </Styled.ListItemContainer>
    );
};

export default ListTeamsByGroup;
