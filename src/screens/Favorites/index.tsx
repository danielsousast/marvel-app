import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useStore } from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Container, SectionTitle, BackButton } from './styles';
import Character from '../../components/Character';
import Details from '../../components/Details';
import Loading from '../../components/Loading';
import Input from '../../components/Input';
import colors from '../../styles/Colors';

interface CharacterData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
const Favorites: React.FC = () => {
  const [character, setCharacter] = useState();
  const [characteres, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const [modalDetails, setModalDetails] = useState(false);

  const navigation = useNavigation();
  const store = useStore();

  const loadCharacters = async () => {
    setLoading(true);

    const list: CharacterData[] = store.getState().app.favorites;

    if (search) {
      const filterList = list.filter(item => {
        const itemFilter = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const newText = search.toUpperCase();
        return itemFilter.indexOf(newText) > -1;
      });

      setCharacters(filterList);
      setSearch(search);
      setLoading(false);
      return;
    }

    setCharacters(list);
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters();
    StatusBar.setHidden(false);
  }, []);

  function onEndReached() {
    if (loading || characteres.length < 20) return;
    loadCharacters();
  }

  const handleShowDetails = useCallback(item => {
    setCharacter(item);
    setModalDetails(true);
  }, []);

  const closeModalDetails = useCallback(() => {
    setModalDetails(false);
  }, []);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <>
      <Container>
        <BackButton onPress={handleGoBack}>
          <Icon name="arrowleft" color={colors.primary} size={26} />
        </BackButton>
        <Input
          icon="search1"
          placeholder="Character name"
          placeholderTextColor="#666"
          keyboardType="web-search"
          onChangeText={text => setSearch(text)}
          onSubmitEditing={loadCharacters}
        />
        <SectionTitle>Favorites Characters</SectionTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characteres}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Character item={item} onPress={() => handleShowDetails(item)} />
          )}
          refreshing={loading}
          onRefresh={loadCharacters}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
        />
        <Details
          visible={modalDetails}
          item={character}
          closeModal={closeModalDetails}
        />
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default Favorites;
