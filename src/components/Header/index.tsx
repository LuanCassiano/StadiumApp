import React from 'react';
import { IHeader } from './interfaces/IHeader';

import * as Styled from './styles';

const Header: React.FC<IHeader> = ({ title }: IHeader) => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>{title}</Styled.Title>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Header;
