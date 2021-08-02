import React, { useState } from 'react';
import { FlatList, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import ListTeamsByGroup from '../ListTeamsByGroup';

import IconAsc from '../../../assets/icons/asc.png';
import IconDesc from '../../../assets/icons/desc.png';

import { IListGroups } from './interfaces/IListGroups';
import { IStandings } from '../../../interfaces/IStandings';

const ListGroups: React.FC<IListGroups> = ({ item }: IListGroups) => {
    const navigation = useNavigation();

    const onItemSelected = ({ team }: IStandings) => {
        navigation.navigate('teamInfo', {
            screen: 'team',
            params: {
                idTeam: team.id,
            },
        });
    };

    const [listItems, setListItems] = useState(item);
    const [sortListType, setSortListType] = useState('asc');

    const orderList = (sortType: string) => {
        const data = [...listItems];

        if (sortType === 'desc') {
            setSortListType(sortType);
            data.sort((a, b) => b.rank - a.rank);
            setListItems(data);
            return;
        }

        setSortListType(sortType);
        data.sort((a, b) => a.rank - b.rank);
        setListItems(data);
    };

    return (
        <Styled.ListContainer>
            <View style={{ alignItems: 'flex-end', marginBottom: 10 }}>
                {sortListType === 'asc' ? (
                    <TouchableOpacity onPress={(): void => orderList('desc')}>
                        <Image
                            source={IconDesc}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={(): void => orderList('asc')}>
                        <Image
                            source={IconAsc}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                )}
            </View>

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
                data={listItems}
                renderItem={({ item }) => (
                    <ListTeamsByGroup
                        item={item}
                        onTeamSelected={onItemSelected}
                    />
                )}
                keyExtractor={(_, index) => String(index)}
                showsVerticalScrollIndicator={false}
            />
        </Styled.ListContainer>
    );
};

export default ListGroups;
