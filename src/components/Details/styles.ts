import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import colors from '../../styles/Colors';

const { width, height } = Dimensions.get('window');

export const Container = styled.Modal`
  flex: 1;
  background: ${colors.background};
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
  width: 100%;

  background: ${colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 60px;
  height: ${height};

  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.OS === 'ios' ? 50 : 20}px;
  left: 20px;
`;

export const Cover = styled.View`
  width: 100%;
  overflow: hidden;
  align-self: center;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  background: ${colors.background};
  height: ${Platform.OS === 'ios' ? width : width * 0.8}px;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  background: ${colors.dark};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: ${Platform.OS === 'ios' ? width : width * 0.8}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 20px 0;
  align-self: center;
`;

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #fff;

  text-transform: uppercase;
`;

export const StarButton = styled.TouchableOpacity`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  color: #fff;
`;

export const CardItem = styled.View`
  justify-content: center;
  align-items: center;
`;
export const CardItemLabel = styled.Text`
  margin-top: 8px;
  color: ${colors.white};
`;

export const SectionTitle = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  margin: 20px;
`;

export const Scroll = styled.ScrollView`
  padding-left: 20px;
  padding-right: 20px;
  height: 150px;
  margin-bottom: 25px;
`;

export const NavButton = styled.TouchableOpacity`
  background: ${colors.primary};
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 80%;
  margin-top: 30px;
  border-radius: 30px;
  align-self: center;
`;

export const NavButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;
