import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import { HomeNavigationProps } from '../../routes';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import * as Styled from './styles';

import * as TeamActions from '../../store/module/Team/actions';

import { RootState } from '../../store/module/rootReducer';

const Team: React.FC = () => {
    const dispatch = useDispatch();

    const { team, venue, loading } = useSelector(
        (state: RootState) => state.team,
    );

    const {
        params: { idTeam, idLeague, season },
    } = useRoute<HomeNavigationProps>();

    useEffect(() => {
        dispatch(TeamActions.getTeamRequest(idTeam, idLeague, season));
    }, []);

    return (
        <Styled.Container>
            <Header title="Equipe" />

            {loading ? (
                <Loading />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Styled.SectionInfo>
                        {team.logo !== '' && (
                            <Styled.SectionMedia
                                source={{ uri: team.logo }}
                                resizeMode="contain"
                            />
                        )}

                        <Styled.SectionBody>
                            <Styled.SectionTitle>
                                {team.name}
                            </Styled.SectionTitle>
                        </Styled.SectionBody>
                    </Styled.SectionInfo>

                    <Styled.Content>
                        <Styled.CardInfoContainer>
                            <Styled.CardInfoTitle>
                                Informações
                            </Styled.CardInfoTitle>

                            <Styled.CardInfoRow>
                                <Styled.CardInfoLabel>
                                    País
                                </Styled.CardInfoLabel>
                                <Styled.CardInfoLabel>
                                    {team.country}
                                </Styled.CardInfoLabel>
                            </Styled.CardInfoRow>

                            <Styled.CardInfoRow>
                                <Styled.CardInfoLabel>
                                    Criado em
                                </Styled.CardInfoLabel>
                                <Styled.CardInfoLabel>
                                    {team.founded}
                                </Styled.CardInfoLabel>
                            </Styled.CardInfoRow>
                        </Styled.CardInfoContainer>

                        <Styled.CardInfoContainer>
                            <Styled.CardInfoTitle>Estádio</Styled.CardInfoTitle>

                            <Styled.CardInfoRow>
                                <Styled.CardInfoLabel>
                                    Nome
                                </Styled.CardInfoLabel>
                                <Styled.CardInfoLabel>
                                    {venue.name}
                                </Styled.CardInfoLabel>
                            </Styled.CardInfoRow>

                            <Styled.CardInfoRow>
                                <Styled.CardInfoLabel>
                                    Endereço
                                </Styled.CardInfoLabel>
                                <Styled.CardInfoLabel>
                                    {venue.address}
                                </Styled.CardInfoLabel>
                            </Styled.CardInfoRow>

                            <Styled.CardInfoRow>
                                <Styled.CardInfoLabel>
                                    Capacidade
                                </Styled.CardInfoLabel>
                                <Styled.CardInfoLabel>
                                    {venue.capacity}
                                </Styled.CardInfoLabel>
                            </Styled.CardInfoRow>

                            {venue.image !== '' && (
                                <Styled.CardInfoMedia
                                    source={{ uri: venue.image }}
                                    resizeMode="contain"
                                />
                            )}
                        </Styled.CardInfoContainer>
                    </Styled.Content>
                </ScrollView>
            )}
        </Styled.Container>
    );
};

export default Team;
