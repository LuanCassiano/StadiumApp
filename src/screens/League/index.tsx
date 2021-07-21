import React, { useEffect, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import ListLeagues from './ListLeagues';
import ListSeasons from './ListSeasons';
import Header from '../../components/Header';

import { ILeague } from '../../interfaces/ILeague';
import { ISeason } from '../../interfaces/ISeason';

import IconLeft from '../../assets/icons/arrow-left.png';

import * as LeagueActions from '../../store/module/League/actions';

import { RootState } from '../../store/module/rootReducer';

const League: React.FC = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { data } = useSelector((state: RootState) => state.league);

    const [selectedLeague, setSelectedLeague] = useState(0);
    const [seasons, setSeasons] = useState<ISeason[]>([]);
    const [headerTitle, setHeaderTitle] = useState('Selecione uma liga');

    const backToLeagues = () => {
        setSeasons([]);
        setHeaderTitle('Selecione uma liga');
    };

    const getLeagues = () => {
        dispatch(LeagueActions.getLeaguesRequest(1, 10));
    };

    const sortSeasons = (data: ISeason[]) => {
        const newArr = [...data];

        const sortedArr = newArr.sort((a, b) => b.year - a.year);

        setSeasons(sortedArr);
    };

    const onSelectLeague = useCallback((item: ILeague) => {
        const { id } = item.league;
        const { seasons } = item;

        setSelectedLeague(id);
        sortSeasons(seasons);
        setHeaderTitle('Selecione uma temporada');
    }, []);

    const onSelectSeason = (item: ISeason) => {
        const { year } = item;

        navigation.navigate('home', {
            screen: 'main',
            params: {
                idLeague: selectedLeague,
                season: year,
            },
        });
    };

    useEffect(() => {
        getLeagues();
    }, []);

    return (
        <Styled.Container>
            <Header title={headerTitle} />

            {seasons.length > 0 ? (
                <>
                    <Styled.Content>
                        <Styled.ActionButton onPress={backToLeagues}>
                            <Styled.IconButton source={IconLeft} />
                            <Styled.ActionButtonText>
                                Voltar
                            </Styled.ActionButtonText>
                        </Styled.ActionButton>
                    </Styled.Content>
                    <FlatList
                        data={seasons}
                        keyExtractor={item => String(item.year)}
                        renderItem={({ item }) => (
                            <ListSeasons
                                item={item}
                                onItemClick={onSelectSeason}
                            />
                        )}
                        contentContainerStyle={{
                            padding: 20,
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={item => String(item.league.id)}
                    renderItem={({ item }) => (
                        <ListLeagues item={item} onItemClick={onSelectLeague} />
                    )}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            )}
        </Styled.Container>
    );
};

export default League;
