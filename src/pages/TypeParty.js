import React, { useEffect, useState } from 'react';
import {
  FlatList, ActivityIndicator, Dimensions,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';

import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';

import * as GetThematicActions from '../store/actions/getThematic';
import * as PartyNextHoursActions from '../store/actions/partyNextHours';
import * as PartyHappeningNowActions from '../store/actions/partyHappeningNow';

import {
  Container,
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
  return (
    <Card activeOpacity={0.9} onPress={() => navigation.navigate('PartyDetail', { slug: partyData.item.party_slug })}>
      <ImgBackground source={party}>
        <Info>
          <Name numberOfLines={1}>{partyData.item.name}</Name>

          <Details>
            <ItemDetails>
              <TextDetails>Confirmados</TextDetails>
              <Number>{partyData.item.presences.length}</Number>
            </ItemDetails>

            <ItemDetails>
              <TextDetails>Estilo da festa</TextDetails>
              <TextDetails>{partyData.item.type_event}</TextDetails>
            </ItemDetails>
          </Details>
        </Info>
      </ImgBackground>
    </Card>
  );
}

export default function TypeParty({ navigation }) {
  const [parties, setParties] = useState('');
  const dispatch = useDispatch();
  const route = useRoute();
  const { getThematic, partyNextHours, partyHappeningNow } = useSelector((state) => state);

  useEffect(() => {
    function partyBySlug(id) {
      switch (id) {
        case '1':
          dispatch(PartyHappeningNowActions.partyHappeningNowRequest(1));
          setParties(partyHappeningNow);
          break;
        case '2':
          dispatch(PartyNextHoursActions.partyNextHoursRequest(1));
          setParties(partyNextHours);
          break;
        case '3':
          dispatch(GetThematicActions.getThematicRequest(1));
          setParties(getThematic);
          break;

        default:
          break;
      }
    }

    partyBySlug(route.params.id);
  }, []);

  function renderItem(data) {
    return (
      <Item navigation={navigation} partyData={data} />
    );
  }

  return (
    <Container>
      <Header navigation={navigation} />
      <TitleMain>{route.params.title}</TitleMain>

      {parties.loading ? (
        <ContainerLoading>
          <ActivityIndicator color="#777" size="large" />
        </ContainerLoading>
      ) : (
        <>
          <FlatList
            data={parties.parties && parties.parties.data}
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

export const Card = styled.TouchableOpacity`
  width:  ${width * 0.9}px;
  height: ${width * 0.7}px;
  marginBottom: 6%;
`;
