import React, { useEffect, useState, useCallback, useRef } from 'react';
import { StatusBar, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useStore } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { addFavorite, delFavorite } from '../../store/actions/AppActions';
import colors from '../../styles/Colors';
import {
  Container,
  Image,
  Content,
  Name,
  BackButton,
  Description,
  Header,
  StarButton,
  Cover,
  NavButton,
  NavButtonText,
  ScrollContent,
} from './styles';

interface DetailsProps {
  visible: boolean;
  item:
    | {
        id: string;
        name: string;
        description: string;
        thumbnail: {
          path: string;
          extension: string;
        };
        resourceURI: string;
        urls: Array;
      }
    | undefined;
  closeModal(): void;
}

interface ItemData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
}

const Details: React.FC<DetailsProps> = ({ visible, item, closeModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    if (item) {
      const list: [ItemData] = store.getState().app.favorites;
      const findCharacter = list.find(favorite => favorite.id === item.id);

      if (findCharacter) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, [item, store]);

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const toogleFavorite = useCallback(
    async character => {
      const list: [ItemData] = store.getState().app.favorites;

      const findItem = await list.find(
        favorite => favorite.id === character.id,
      );

      if (findItem) {
        dispatch(delFavorite(character.id));

        setIsFavorite(false);

        return;
      }

      dispatch(addFavorite(character));
      setIsFavorite(true);
    },
    [dispatch, store],
  );

  const handleGoBack = useCallback(() => {
    StatusBar.setHidden(false);
    closeModal();
  }, []);

  const handleNavigation = useCallback(param => {
    Linking.openURL('https://www.marvel.com/characters/');
  }, []);

  return (
    <Container visible={visible} animationType="slide">
      <ScrollContent
        contentContainerStyle={{
          justifyContent: 'center',
        }}
      >
        <Content>
          <BackButton onPress={handleGoBack}>
            <Icon name="arrowleft" color={colors.primary} size={26} />
          </BackButton>
          {item && (
            <>
              <Cover>
                <Image
                  source={{
                    uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                  }}
                />
              </Cover>

              <Header>
                <StarButton onPress={() => toogleFavorite(item)}>
                  <Icon
                    name={isFavorite ? 'star' : 'staro'}
                    size={38}
                    color={colors.primary}
                  />
                </StarButton>
                <Name>{item.name}</Name>
              </Header>

              <Description>
                {item.description ||
                  'Fictional character that appears in American comics published by Marvel'}
              </Description>
              <NavButton onPress={() => handleNavigation(item)}>
                <NavButtonText>View more</NavButtonText>
              </NavButton>
            </>
          )}
        </Content>
      </ScrollContent>
    </Container>
  );
};

export default Details;
