import React from 'react';
import { Container, Image, Info, Name, Description } from './styles';

interface ChatacterProps {
  item: {
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
  onPress(): void;
}

const Character: React.FC<ChatacterProps> = ({ item, onPress }) => {
  return (
    <Container onPress={onPress} style={{ elevation: 1 }}>
      <Image
        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
        resizeMode="cover"
      />
      <Info>
        <Name>{item.name}</Name>
        <Description numberOfLines={2}>
          {item.description ||
            'Fictional character that appears in American comics published by Marvel'}
        </Description>
      </Info>
    </Container>
  );
};

export default Character;
