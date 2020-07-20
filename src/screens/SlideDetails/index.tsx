import React, { useRef, useState, useCallback, useEffect } from 'react';
import Carousel from 'react-native-anchor-carousel';
import { useRoute, useNavigation } from '@react-navigation/native';
import {
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import api from '../../services/api';
import colors from '../../styles/Colors';
import Loading from '../../components/Loading';
import {
  Container,
  Description,
  ScreenTitle,
  CarouselContainer,
  ItemInfo,
  ItemName,
  BackgroundImage,
  CarouselImage,
  Filter,
  BackButton,
} from './styles';

LogBox.ignoreAllLogs(['FlatList']);
const { width } = Dimensions.get('window');

interface ParamsData {
  limit: number;
  offset: number;
}

const SlideDetails: React.FC = () => {
  const route = useRoute();

  const { itens } = route.params;
  const navigation = useNavigation();
  const carrouselRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(0);
  const [background, setBackground] = useState(
    {
      name: itens[0].title,
      uri: `${itens[0].thumbnail.path}.${itens[0].thumbnail.extension}`,
      description: itens[0].previous,
    } || {},
  );

  const loadSeries = async (reset = false) => {
    if (loading) return;

    setLoading(true);

    const nextPage = reset ? 1 : page + 1;

    const params: ParamsData = {
      limit: 10,
      offset: (nextPage - 1) * 10,
    };

    const response = await api.get('series', { params });

    setPage(nextPage);
    setSeries(
      reset
        ? response.data.data.results
        : [...series, ...response.data.data.results],
    );
    setLoading(false);
  };

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  useEffect(() => {
    loadSeries(true);
  }, []);

  function onEndReached() {
    if (loading || series.length < 10) return;
    loadSeries();
  }

  const handleGoBack = useCallback(() => {
    StatusBar.setHidden(false);
    navigation.goBack();
  }, [navigation]);

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carrouselRef.current.scrollToIndex(index);
            setBackground({
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              name: item.title,
              description: item.previous,
            });
          }}
        >
          <CarouselImage
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Container>
      <BackgroundImage source={{ uri: background.uri }} blurRadius={10}>
        <Filter>
          <ScreenTitle>Popular Series</ScreenTitle>

          <CarouselContainer>
            <Carousel
              style={{
                flex: 1,
                overflow: 'visible',
                height: '100%',
              }}
              data={series}
              renderItem={renderItem}
              itemWidth={200}
              containerWidth={width - 20}
              separatorWidth={0}
              ref={carrouselRef}
              onEndReached={onEndReached}
            />
          </CarouselContainer>

          <ItemInfo>
            <View style={{ justifyContent: 'center' }}>
              <ItemName>{background.name}</ItemName>

              <Description>
                {background.description ||
                  `${background.name} is an excellent American series developed by Marvel`}
              </Description>
            </View>
          </ItemInfo>
        </Filter>
      </BackgroundImage>
      <BackButton onPress={handleGoBack}>
        <Icon name="close" color={colors.dark} size={24} />
      </BackButton>
      {loading && <Loading />}
    </Container>
  );
};

export default SlideDetails;
