import React, { useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import ListLeagues from './ListLeagues';
import Header from '../../components/Header';

import { ILeague } from '../../interfaces/ILeague';

import * as LeagueActions from '../../store/module/League/actions';

import { RootState } from '../../store/module/rootReducer';

const League: React.FC = () => {
    const dispatch = useDispatch();

    const { data } = useSelector((state: RootState) => state.league);

    const getLeagues = (): void => {
        dispatch(LeagueActions.getLeaguesRequest(1, 10));
    };

    const onItemClick = useCallback(({ league }: ILeague) => {
        console.tron.log('selected', league);
    }, []);

    useEffect(() => {
        getLeagues();
    }, []);

    return (
        <Styled.Container>
            <Header />

            <FlatList
                data={data}
                keyExtractor={item => String(item.league.id)}
                renderItem={({ item }) => (
                    <ListLeagues item={item} onItemClick={onItemClick} />
                )}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </Styled.Container>
    );
};

export default League;
