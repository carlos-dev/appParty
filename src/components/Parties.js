import React from 'react';
import { Dimensions, FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import party from '../assets/images/party.jpg';

import {
  TitleMain,
  Cards,
  Card,
  ImgBackground,
  Info,
  Details,
  ItemDetails,
  TextDetails,
  Number,
  Name,
} from '../styles/globalStyles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ navigation, partyData }) {
  console.log(partyData.item);

  return (
    <Cards>
      <Card activeOpacity={0.9} onPress={() => navigation.navigate('PartyDetail', { id: partyData.item.id })}>
        <ImgBackground source={party}>
          <Info>
            <Name>{partyData.item.name}</Name>

            <Details>
              <ItemDetails>
                <TextDetails>Confirmados</TextDetails>
                <Number>{partyData.item.presences.length}</Number>
              </ItemDetails>

              <ItemDetails>
                <TextDetails>Estilo da festa</TextDetails>
                <TextDetails>{partyData.item.type_event}</TextDetails>
              </ItemDetails>

              <ItemDetails>
                <TextDetails>Rolando...</TextDetails>
              </ItemDetails>
            </Details>
          </Info>
        </ImgBackground>
      </Card>
    </Cards>
  );
}

export default function Parties({ navigation, title, partyData }) {
  const renderItem = (data) => (
    <Item navigation={navigation} partyData={data} />
  );

  return (
    <WrapperParties>
      <TitleMain>{title}</TitleMain>

      {partyData.loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={partyData.thematicData.data}
          renderItem={renderItem}
          keyExtractor={(item) => String(item.id)}
          horizontal
        />
      )}
    </WrapperParties>
  );
}

export const WrapperParties = styled.View`
  alignItems: flex-start;
  width: 96%;
  paddingTop: 10%;
  marginBottom: 1%;
  flex: 1;
`;
