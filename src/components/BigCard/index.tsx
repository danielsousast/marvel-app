import React from 'react';
import { Container, Image } from './styles';

interface CardProps {
  item: {
    id: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  };
}

const BigCard: React.FC<CardProps> = ({ item }) => {
  return (
    <Container style={{ elevation: 1 }}>
      <Image
        source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}
      />
    </Container>
  );
};
export default BigCard;
