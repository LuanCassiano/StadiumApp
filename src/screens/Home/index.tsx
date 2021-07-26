import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainChampionships from './MainChampionships';
import ParticipatingTeams from './ParticipatingTeams';

import * as Styled from './styles';

import * as LeagueActions from '../../store/module/League/actions';
import * as StandingsActions from '../../store/module/Standings/actions';

import { RootState } from '../../store/module/rootReducer';

import { RootNavigationProps } from '../../routes';

import { IChampionship } from '../../interfaces/IChampionship';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { loading, teamsLeague } = useSelector(
        (state: RootState) => state.standings,
    );

    const { league } = useSelector((state: RootState) => state.league);

    const [leagueId, setLeagueId] = useState(0);

    const {
        params: { idLeague, season },
    } = useRoute<RootNavigationProps>();

    const onNavigate = (idTeam: number) => {
        navigation.navigate('teamInfo', {
            screen: 'team',
            params: {
                idTeam,
            },
        });
    };

    const getLeagueInfo = (id?: number) => {
        if (id) {
            dispatch(LeagueActions.getLeagueByIdRequest(id));
            setLeagueId(id);
            return;
        }

        dispatch(LeagueActions.getLeagueByIdRequest(idLeague));
    };

    const onSelectedMainChampionship = (item: IChampionship) => {
        dispatch(
            StandingsActions.getParticipatingTeamsRequest(item.id, season),
        );
        getLeagueInfo(item.id);
    };

    const getStandings = () => {
        dispatch(
            StandingsActions.getParticipatingTeamsRequest(idLeague, season),
        );
    };

    const _renderSectionChampionshipInfo = () => {
        return (
            <Styled.Content>
                <Styled.Row>
                    <Styled.SectionCurrentChampionshipContent>
                        {league.logo !== '' && (
                            <Styled.LogoChampionship
                                source={{ uri: league.logo }}
                                resizeMode="contain"
                            />
                        )}
                        <Styled.TitleChampionship>
                            {league.name}
                        </Styled.TitleChampionship>
                    </Styled.SectionCurrentChampionshipContent>

                    <Styled.ButtonSeeTable
                        onPress={(): void =>
                            navigation.navigate('standing', {
                                idLeague: leagueId !== 0 ? leagueId : idLeague,
                                season,
                            })
                        }
                    >
                        <Styled.ButtonText>Ver tabela</Styled.ButtonText>
                    </Styled.ButtonSeeTable>
                </Styled.Row>
            </Styled.Content>
        );
    };

    useEffect(() => {
        getStandings();
        getLeagueInfo();
    }, []);

    return (
        <Styled.Container>
            <Header title="Home" />

            {loading ? (
                <Loading />
            ) : (
                <ScrollView>
                    <MainChampionships
                        onItemClicked={onSelectedMainChampionship}
                    />

                    {_renderSectionChampionshipInfo()}

                    <ParticipatingTeams
                        teamsLeague={teamsLeague}
                        onItemPress={onNavigate}
                    />
                </ScrollView>
            )}
        </Styled.Container>
    );
};

export default Home;
