import styled from 'styled-components/native';
import colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 30px;
  background: #242d3c;
  justify-content: center;
  opacity: 0.9;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 26px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Label = styled.Text`
  color: ${colors.white};
  width: 75%;
  margin-top: 15px;
  font-size: 20px;
  margin-left: 10px;
  line-height: 35px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 90%;
  position: absolute;
  bottom: 80px;
  border-radius: 30px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;
