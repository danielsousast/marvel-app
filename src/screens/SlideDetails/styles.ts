import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import colors from '../../styles/Colors';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background: ${colors.background};
`;

export const BackgroundImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  opacity: 0.8;
`;

export const Filter = styled.ScrollView`
  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.3);
`;

export const ScreenTitle = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 60 : 20}px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 22px;
  margin-left: 20px;
`;

export const CarouselContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 350px;
  margin-top: 20px;
`;

export const CarouselImage = styled.Image`
  width: 200px;
  height: 320px;
  border-radius: 10px;
  align-self: center;
  background: rgba(0, 0, 0, 0.9);
`;

export const ItemInfo = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  padding: 20px;
`;

export const ItemName = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 20px;
  width: ${width - 50}px;
`;

export const Description = styled.Text`
  color: ${colors.white};
  font-size: 18px;
  margin-top: 30px;

  width: ${width - 50}px;
  line-height: 30px;
  z-index: 999;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
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
