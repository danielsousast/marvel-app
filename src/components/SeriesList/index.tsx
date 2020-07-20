import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import BigCard from '../BigCard';
import {
  Container,
  SectionRow,
  SectionTitle,
  DetailsButton,
  DetailsButtonText,
} from './styles';

interface ParamsData {
  limit: number;
  offset: number;
}

interface SerieData {
  id: string;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const SeriesList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState<SerieData[]>([]);

  const navigation = useNavigation();

  const loadSeries = async () => {
    if (loading) return;

    setLoading(true);

    const params: ParamsData = {
      limit: 10,
      offset: 1,
    };

    const response = await api.get('series', { params });

    setSeries(response.data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    loadSeries();
  }, []);

  return (
    <Container>
      <SectionRow>
        <SectionTitle>Popular Series</SectionTitle>
        <DetailsButton
          onPress={() => navigation.navigate('Slide', { itens: series })}
        >
          <DetailsButtonText>View details</DetailsButtonText>
        </DetailsButton>
      </SectionRow>
      <FlatList
        contentContainerStyle={{ paddingLeft: 20 }}
        data={series}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={serie => String(serie.id)}
        renderItem={({ item }) => <BigCard item={item} />}
      />
    </Container>
  );
};

export default SeriesList;
