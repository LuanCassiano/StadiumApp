import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import ListTeamsByGroup from '../ListTeamsByGroup';

import { IListGroups } from './interfaces/IListGroups';
import { IStandings } from '../../../interfaces/IStandings';

const ListGroups: React.FC<IListGroups> = ({ item }: IListGroups) => {
    const navigation = useNavigation();

    const onItemSelected = ({ team }: IStandings) => {
        navigation.navigate('team', {
            idTeam: team.id,
        });
    };

    return (
        <Styled.ListContainer>
            <Styled.ListBody>
                <Styled.ListContent>
                    <Styled.ListLabel>Time</Styled.ListLabel>
                </Styled.ListContent>

                <Styled.ListContent>
                    <Styled.ListDivider>
                        <Styled.ListLabel>P</Styled.ListLabel>
                    </Styled.ListDivider>

                    <Styled.ListDivider>
                        <Styled.ListLabel>J</Styled.ListLabel>
                    </Styled.ListDivider>

                    <Styled.ListDivider>
                        <Styled.ListLabel>V</Styled.ListLabel>
                    </Styled.ListDivider>

                    <Styled.ListDivider>
                        <Styled.ListLabel>D</Styled.ListLabel>
                    </Styled.ListDivider>
                </Styled.ListContent>
            </Styled.ListBody>
            <FlatList
                data={item}
                renderItem={({ item }) => (
                    <ListTeamsByGroup
                        item={item}
                        onTeamSelected={onItemSelected}
                    />
                )}
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
            />
        </Styled.ListContainer>
    );
};

export default ListGroups;
