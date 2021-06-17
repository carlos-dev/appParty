import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import Header from '../components/Header';

import * as SearchPartyActions from '../store/actions/searchParty';
import { scaleFontSize } from '../utils/scaleFontSize';

import {
  Container,
  globalStyles,
  TitleMain,
  ImgBackground,
  Info,
  Details,
  ItemDetails,
  TextDetails,
  Number,
  Name,
} from '../styles/globalStyles';

import party from '../assets/images/party.jpg';

const { width } = Dimensions.get('window');

function Item({ navigation, partyData }) {
  console.log(partyData);
  return (
    <Card activeOpacity={0.9} onPress={() => navigation.navigate('PartyDetail', { slug: partyData.item.party_slug })}>
      <ImgBackground source={party}>
        <Info>
          <Name numberOfLines={1}>{partyData.item.name}</Name>

          <Details>
            <ItemDetails>
              <TextDetails>Confirmados</TextDetails>
              {partyData.item.presences ? (
                <Number>{partyData.item.presences.length}</Number>

              ) : (
                <Number>0</Number>
              )}
            </ItemDetails>

            <ItemDetails>
              <TextDetails>Estilo da festa</TextDetails>
              <TextDetails>{partyData.item.type_event}</TextDetails>
            </ItemDetails>

            {/* <ItemDetails>
              <TextDetails>Rolando...</TextDetails>
            </ItemDetails> */}
          </Details>
        </Info>
      </ImgBackground>
    </Card>
  );
}

export default function SearchParty({ navigation }) {
  const [parties, setParties] = useState([0]);
  const dispatch = useDispatch();
  const { searchParty } = useSelector((state) => state);

  const renderItem = (data) => (
    <Item navigation={navigation} partyData={data} />
  );

  const getParty = (text) => {
    dispatch(SearchPartyActions.searchPartyRequest(text));

    setParties(searchParty.searchPartyData);
  };

  console.log(searchParty.searchPartyData);

  return (
    <Container>
      <Header navigation={navigation} />

      <ViewInput>
        <IconSearch name="search" color="#666360" style={globalStyles.iconSearch} />
        <Search
          placeholder="Buscar"
          placeholderTextColor="#535466"
          onChangeText={getParty}
        />
      </ViewInput>

      {searchParty.loading ? (
        <ContainerLoading>
          <ActivityIndicator color="#777" size="large" />
        </ContainerLoading>
      ) : (
        <>
          <FlatList
            data={searchParty.searchPartyData}
            renderItem={renderItem}
            keyExtractor={(item) => String(item.id)}
          />
        </>
      )}

    </Container>
  );
}

export const ContainerLoading = styled.View`
  width: 100%;
  height: 100%;
  justifyContent: center;
  alignItems: center;
`;

export const ViewInput = styled.View`
  backgroundColor: ${(props) => props.theme.secondary};
  flexDirection: row;
  alignItems: center;
  margin: 5% 0;
  paddingLeft: 2%;
  width: ${width * 0.9}px;
`;

export const Search = styled.TextInput`
  fontSize: ${scaleFontSize(13)}px;
  color: ${(props) => props.theme.primary};
  padding: 4% 2%;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width:  ${width * 0.9}px;
  height: ${width * 0.7}px;
  marginBottom: 6%;
`;

export const TextNotFound = styled.Text`
  fontSize: ${scaleFontSize(13)}px;
  color: ${(props) => props.theme.primary};

`;
