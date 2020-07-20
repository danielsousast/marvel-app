import styled, { css } from 'styled-components/native';
import colors from '../../styles/Colors';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  height: 50px;
  width: 100%;
  margin: 30px;
  padding: 0 10px;
  border-radius: 25px;
  align-self: center;
  background: ${colors.dark};
  font-size: 16px;
  flex-direction: row;
  align-items: center;
  border: 2px solid ${colors.dark}
    ${props =>
      props.isFocused &&
      css`
        border: 2px solid ${colors.primary};
      `};
`;

export const TextInput = styled.TextInput`
  height: 50px;
  width: 90%;
  padding: 0 18px;
  color: #ccc;
  font-size: 16px;
`;
