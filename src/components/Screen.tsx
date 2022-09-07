import styled from 'styled-components/native';

interface Props {
  secondary?: boolean;
}

const Screen = styled.View<Props>`
  background-color: ${({theme, secondary}) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Screen;
