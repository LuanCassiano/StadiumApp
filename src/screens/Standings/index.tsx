import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import ListGroups from './ListGroups';

import * as Styled from './styles';

import * as StandingsActions from '../../store/module/Standings/actions';

import { RootNavigationProps } from '../../routes';

import { RootState } from '../../store/module/rootReducer';

const Standings: React.FC = () => {
    const {
        params: { idLeague, season },
    } = useRoute<RootNavigationProps>();

    const dispatch = useDispatch();

    const { loading, data } = useSelector(
        (state: RootState) => state.standings,
    );

    const [standings, setStandings] = useState<any[]>([]);
    const [leagueInfo, setLeagueInfo] = useState('');

    const getStandings = () => {
        dispatch(StandingsActions.getStandingsRequest(idLeague, season));
    };

    useEffect(() => {
        getStandings();
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            setStandings(data[0].league.standings);
            setLeagueInfo(data[0].league.name);
        }
    }, [data]);

    useEffect(() => {
        setStandings([]);
    }, []);

    return (
        <Styled.Container>
            <Header title={`Tabela - ${leagueInfo}`} />

            {loading ? (
                <Loading />
            ) : (
                <Styled.Content>
                    <FlatList
                        data={standings}
                        renderItem={({ item }) => <ListGroups item={item} />}
                        keyExtractor={(_, index) => String(index)}
                        contentContainerStyle={{ paddingBottom: 50 }}
                        showsVerticalScrollIndicator={false}
                    />
                </Styled.Content>
            )}
        </Styled.Container>
    );
};

export default Standings;
