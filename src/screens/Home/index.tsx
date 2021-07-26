import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainChampionships from './MainChampionships';
import ParticipatingTeams from './ParticipatingTeams';

import * as Styled from './styles';

import * as StandingsActions from '../../store/module/Standings/actions';

import { RootState } from '../../store/module/rootReducer';

import { RootNavigationProps } from '../../routes';

import { ILeague } from '../../interfaces/ILeague';
import { IChampionship } from '../../interfaces/IChampionship';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { data, loading, teamsLeague } = useSelector(
        (state: RootState) => state.standings,
    );

    const [leagueData, setLeagueData] = useState<ILeague>({
        id: 0,
        logo: '',
        name: '',
        type: '',
    });

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

    const onSelectedMainChampionship = (item: IChampionship) => {
        dispatch(StandingsActions.getStandingsRequest(item.id, season));
    };

    const getStandings = () => {
        dispatch(StandingsActions.getStandingsRequest(idLeague, season));
    };

    const _renderSectionChampionshipInfo = () => {
        return (
            <Styled.Content>
                <Styled.Row>
                    <Styled.SectionCurrentChampionshipContent>
                        {leagueData.logo !== '' && (
                            <Styled.LogoChampionship
                                source={{ uri: leagueData.logo }}
                                resizeMode="contain"
                            />
                        )}
                        <Styled.TitleChampionship>
                            {leagueData.name}
                        </Styled.TitleChampionship>
                    </Styled.SectionCurrentChampionshipContent>

                    <Styled.ButtonSeeTable
                        onPress={(): void => navigation.navigate('standing')}
                    >
                        <Styled.ButtonText>Ver tabela</Styled.ButtonText>
                    </Styled.ButtonSeeTable>
                </Styled.Row>
            </Styled.Content>
        );
    };

    useEffect(() => {
        getStandings();
    }, []);

    useEffect(() => {
        if (data && data.length > 0) {
            setLeagueData({
                id: data[0].league.id,
                logo: data[0].league.logo,
                name: data[0].league.name,
                type: '',
            });
        }
    }, [data]);

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

            {/* {loading ? (
                <Loading />
            ) : (
                <>
                    <View
                        style={{
                            marginBottom: 20,
                            backgroundColor: '#131313',
                            padding: 20,
                            marginLeft: 20,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
                    >
                        <Text>Principais campeonatos</Text>
                        <FlatList
                            data={mainChampionships}
                            keyExtractor={item => String(item.id)}
                            renderItem={({ item }) =>
                                _renderChampionships(item)
                            }
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <Styled.Content>
                        <FlatList
                            data={standings}
                            renderItem={({ item }) => (
                                <ListGroups item={item} />
                            )}
                            keyExtractor={(_, index) => String(index)}
                            contentContainerStyle={{ paddingBottom: 70 }}
                            showsVerticalScrollIndicator={false}
                        />
                    </Styled.Content>
                </>
            )} */}
        </Styled.Container>
    );
};

export default Home;
