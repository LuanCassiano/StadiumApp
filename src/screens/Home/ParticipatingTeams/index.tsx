import React, { Fragment } from 'react';

import { IParticipatingTeams } from './interfaces/IParticipatingTeams';

import * as Styled from './styles';

const ParticipatingTeams: React.FC<IParticipatingTeams> = ({
    teamsLeague,
    onItemPress,
}: IParticipatingTeams) => {
    return (
        <Styled.Content>
            <Styled.SubTitle>Times participantes</Styled.SubTitle>

            <Styled.ListContainer>
                {teamsLeague.map(teams => (
                    <Fragment key={teams.id}>
                        <Styled.Card
                            onPress={(): void => onItemPress(teams.id)}
                        >
                            <Styled.CardContent>
                                <Styled.CardMedia
                                    source={{ uri: teams.logo }}
                                    resizeMode="contain"
                                />
                                <Styled.CardTitle>
                                    {teams.name}
                                </Styled.CardTitle>
                            </Styled.CardContent>
                        </Styled.Card>
                    </Fragment>
                ))}
            </Styled.ListContainer>
        </Styled.Content>
    );
};

export default ParticipatingTeams;
