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

const { width } = Dimensions.get('window');

function Item({ navigation, partyData }) {
  return (
    <Cards>
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
        <ContainerLoading>
          <ActivityIndicator color="#777" size="large" />

        </ContainerLoading>
      ) : (
        <FlatList
          data={partyData.parties.data}
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

export const ContainerLoading = styled.View`
  width:  ${width * 0.85}px;
  height: ${width * 0.7}px;
  justifyContent: center;
  alignItems: center;
`;
