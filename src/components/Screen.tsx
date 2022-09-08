import styled from 'styled-components/native';

type TProps = {
  secondary?: boolean;
};

const Screen = styled.View<TProps>`
  background-color: ${({theme, secondary}) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  flex: 1;
`;

export default Screen;
