import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Loading from '../../components/Loading';
import Character from '../../components/Character';
import Details from '../../components/Details';
import SeriesList from '../../components/SeriesList';
import {
  Container,
  Logo,
  Header,
  SectionTitle,
  SectionRow,
  DetailsButton,
  DetailsButtonText,
  ScrollContainer,
} from './styles';

interface ParamsData {
  limit: number;
  orderBy: string;
}

interface CharacterData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Home: React.FC = () => {
  const [character, setCharacter] = useState<CharacterData | undefined>();
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const [loading, setLoading] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);

  const navigation = useNavigation();

  const loadCharacters = async (): Promise<void> => {
    if (loading) return;

    setLoading(true);

    const params: ParamsData = {
      limit: 10,

      orderBy: 'name',
    };

    const response = await api.get('characters', { params });

    setCharacters(response.data.data.results);
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters();

    StatusBar.setHidden(false);
  }, []);

  const handleShowDetails = useCallback(item => {
    setCharacter(item);
    setModalDetails(true);
  }, []);

  const closeModalDetails = useCallback(() => {
    setModalDetails(false);
  }, []);

  return (
    <>
      <Container>
        <ScrollContainer showsVerticalScrollIndicator={false}>
          <Header>
            <Logo
              source={require('../../assets/logo.png')}
              resizeMode="contain"
            />
          </Header>

          <SeriesList />

          <SectionRow>
            <SectionTitle>Marvel Characters</SectionTitle>
            <DetailsButton onPress={() => navigation.navigate('Search')}>
              <DetailsButtonText>View More</DetailsButtonText>
            </DetailsButton>
          </SectionRow>
          <FlatList
            style={{ marginHorizontal: 20 }}
            showsVerticalScrollIndicator={false}
            data={characters}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Character item={item} onPress={() => handleShowDetails(item)} />
            )}
          />
          <Details
            visible={modalDetails}
            item={character}
            closeModal={closeModalDetails}
          />
        </ScrollContainer>
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default Home;
