import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: ${Platform.OS === 'ios' ? 60 : 20}px;
  padding-bottom: ${Platform.OS === 'ios' ? 40 : 0}px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
`;

export const Logo = styled.Image`
  height: 50px;
  margin-bottom: 10px;
  width: 100%;
`;

export const InputView = styled.View`
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
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  padding: 0 18px;
  color: ${colors.lightgray};
  font-size: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  margin-bottom: 20px;
`;

export const SectionRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const NavButton = styled.TouchableOpacity``;

export const NavButtonText = styled.Text`
  font-size: 15px;
  color: ${colors.lightgray};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? 50 : 10}px;
  left: 20px;
`;
