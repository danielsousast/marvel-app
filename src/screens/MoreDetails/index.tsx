import React, { useEffect, useState, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useStore } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { addFavorite, delFavorite } from '../../store/actions/AppActions';
import api from '../../services/api';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import colors from '../../styles/Colors';

import {
  Container,
  Image,
  Content,
  Name,
  SectionTitle,
  Scroll,
  CloseButton,
  Description,
  Header,
  StarButton,
  CardItemsView,
  CardItem,
  CardItemLabel,
  Cover,
} from './styles';

interface ItemData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CardData {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const MoreDetails: React.FC = () => {
  const [series, setSeries] = useState<CardData[]>([]);
  const [events, setEvents] = useState<CardData[]>([]);
  const [comics, setComics] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const [seriesCount, setSeriesCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [comicsCount, setCoomicsCount] = useState(0);

  const dispatch = useDispatch();
  const store = useStore();
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

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

    async function loadSeries() {
      if (!item) return;

      setLoading(true);

      const seriesResp = await api.get(`characters/${item.id}/series`);
      const eventsResp = await api.get(`characters/${item.id}/events`);
      const comicsResp = await api.get(`characters/${item.id}/comics`);
      setSeries(seriesResp.data.data.results);
      setSeriesCount(seriesResp.data.data.results.length);

      setEvents(eventsResp.data.data.results);
      setEventsCount(eventsResp.data.data.results.length);

      setComics(comicsResp.data.data.results);
      setCoomicsCount(comicsResp.data.data.results.length);

      setLoading(false);
    }

    loadSeries();
  }, [item]);

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
    navigation.goBack();
  }, []);

  return (
    <>
      <Container>
        <Content showsVerticalScrollIndicator={false}>
          <Cover>
            <Image
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
            <CloseButton onPress={handleGoBack}>
              <Icon name="close" size={24} color={colors.background} />
            </CloseButton>
          </Cover>

          <Header>
            <Name>{item.name}</Name>
            <StarButton onPress={() => toogleFavorite(item)}>
              <Icon
                name={isFavorite ? 'star' : 'staro'}
                size={35}
                color={colors.primary}
              />
            </StarButton>
          </Header>
          <CardItemsView>
            <CardItem>
              <Icon name="picture" size={30} color="rgba(255, 255, 255, 0.4)" />
              <CardItemLabel> {seriesCount} Series</CardItemLabel>
            </CardItem>
            <CardItem>
              <Icon name="book" size={30} color="rgba(255, 255, 255, 0.4)" />
              <CardItemLabel> {comicsCount} Comics</CardItemLabel>
            </CardItem>
            <CardItem>
              <Icon name="rocket1" size={30} color="rgba(255, 255, 255, 0.4)" />
              <CardItemLabel> {eventsCount} Events</CardItemLabel>
            </CardItem>
          </CardItemsView>

          <Description>
            {item.description ||
              'Fictional character that appears in American comics published by Marvel'}
          </Description>

          {comics.length > 0 && (
            <>
              <SectionTitle>Series</SectionTitle>
              <Scroll
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 30 }}
              >
                {series.map(serie => (
                  <Card key={serie.id} item={serie} />
                ))}
              </Scroll>
            </>
          )}
          {comics.length > 0 && (
            <>
              <SectionTitle>Comics</SectionTitle>
              <Scroll
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 30 }}
              >
                {comics.map(comic => (
                  <Card key={comic.id} item={comic} />
                ))}
              </Scroll>
            </>
          )}

          {events.length > 0 && (
            <>
              <SectionTitle>Events</SectionTitle>
              <Scroll
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 30 }}
              >
                {events.map(serie => (
                  <Card key={serie.id} item={serie} />
                ))}
              </Scroll>
            </>
          )}
        </Content>

        {loading && <Loading />}
      </Container>
    </>
  );
};

export default MoreDetails;
