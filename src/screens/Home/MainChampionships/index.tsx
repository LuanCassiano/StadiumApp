import React from 'react';
import { FlatList } from 'react-native';

import * as Styled from './styles';

import Championships from '../../../data/MainChampionships.json';

import { IChampionship } from '../../../interfaces/IChampionship';
import { IMainChampionships } from './interfaces/IMainChampionships';

const MainChampionships: React.FC<IMainChampionships> = ({
    onItemClicked,
}: IMainChampionships) => {
    const mainChampionships: IChampionship[] = Championships;

    const _renderChampionships = (item: IChampionship) => {
        return (
            <Styled.ListItem onPress={(): void => onItemClicked(item)}>
                <Styled.ListItemMedia
                    source={{ uri: item.logo }}
                    resizeMode="cover"
                />
            </Styled.ListItem>
        );
    };

    return (
        <Styled.SectionMainChampionshipContainer>
            <Styled.SectionMainChampionshipText>
                Principais campeonatos
            </Styled.SectionMainChampionshipText>
            <FlatList
                data={mainChampionships}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => _renderChampionships(item)}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Styled.SectionMainChampionshipContainer>
    );
};

export default MainChampionships;
