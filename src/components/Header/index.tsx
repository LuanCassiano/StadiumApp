import React from 'react';

import * as Styled from './styles';

const Header: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>Selecione uma liga</Styled.Title>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Header;
