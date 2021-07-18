import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
    colors: ['#313e56', '#f5f5f5'],
    start: { x: 0, y: 0 },
    end: { x: 0.5, y: 3.5 },
})`
    flex: 1;
`;
