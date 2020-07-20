import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../../styles/Colors';

const { width, height } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${width * 0.3}px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  flex-direction: row;
  background: ${colors.dark};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.Image`
  height: 130px;
  width: 100px;
`;

export const Info = styled.View`
  background: ${colors.dark};
  justify-content: center;

  height: 130px;
  width: 100%;
  padding: 10px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  flex-wrap: wrap;
  width: 250px;
`;

export const Description = styled.Text`
  color: #ccc;
  width: 200px;
  height: 60px;
  margin-top: 10px;
  margin-right: 10px;
`;
