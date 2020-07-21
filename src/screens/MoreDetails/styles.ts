import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const Content = styled.ScrollView`
  flex: 1;
  background: ${colors.background};
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  top: ${Platform.OS === 'ios' ? 50 : 20}px;
  right: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;

export const Cover = styled.View`
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  height: ${Platform.OS === 'ios' ? width : width * 0.8}px;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: ${Platform.OS === 'ios' ? width : width * 0.8}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
  width: 250px;
  text-transform: uppercase;
`;

export const StarButton = styled.TouchableOpacity`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
`;

export const Description = styled.Text`
  color: ${colors.white};
  margin: 20px;
`;

export const CardItemsView = styled.View`
  width: 90%;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: ${colors.dark};
  border-radius: 8px;
`;

export const CardItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const CardItemLabel = styled.Text`
  color: ${colors.white};
  margin-left: 10px;
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
