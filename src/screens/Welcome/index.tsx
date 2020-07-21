import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Background,
  Button,
  ButtonText,
  Content,
  Label,
  Title,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigation = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  return (
    <Container>
      <Background source={require('../../assets/background.jpg')}>
        <Content>
          <Title>Are you a Marvel fan?</Title>
          <Label>
            How about having all characters in the palm of your hand
          </Label>
          <Button onPress={handleNavigation}>
            <ButtonText>Let's Go</ButtonText>
          </Button>
        </Content>
      </Background>
    </Container>
  );
};

export default Welcome;
