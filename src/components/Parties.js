import React from 'react';
import {
  Dimensions, FlatList, ActivityIndicator, TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import DropShadow from 'react-native-drop-shadow';

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

import { scaleFontSize } from '../utils/scaleFontSize';

const { width } = Dimensions.get('window');

function Item({ navigation, partyData }) {
  return (
    <Cards>
      <DropShadow
        style={{
          shadowColor: '#444',
          shadowOffset: {
            width: 6,
            height: 10,
          },
          shadowOpacity: 0.8,
          shadowRadius: 5,
        }}
      >
        <Card
          activeOpacity={0.9}
          onPress={() => navigation.navigate('PartyDetail', { slug: partyData.item.party_slug })}
        >
          <ImgBackground source={party}>
            <Info>
              <Name numberOfLines={1}>{partyData.item.name}</Name>

              <Details>
                <ItemDetails>
                  <TextDetails>Confirmados</TextDetails>
                  <Number>{JSON.parse(partyData.item.presences).length}</Number>
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

      </DropShadow>
    </Cards>
  );
}

export default function Parties({
  navigation, title, partyData, id,
}) {
  function renderItem(data) {
    return (
      <Item navigation={navigation} partyData={data} />
    );
  }

  return (
    <WrapperParties>
      <Header>
        <Header>
          <TitleMain>{title}</TitleMain>

          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('TypeParty', { id, title })}>
            <TextSeeMore>Ver Mais</TextSeeMore>
          </TouchableOpacity>
        </Header>

      </Header>

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

export const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  width: 100%;
  align-items: center;
`;

export const TextSeeMore = styled.Text`
  fontSize: ${scaleFontSize(16)}px;
  color: ${(props) => props.theme.primary};
  marginBottom: 6%;
  textDecoration: underline;
`;

export const ContainerLoading = styled.View`
  width:  ${width * 0.85}px;
  height: ${width * 0.7}px;
  justifyContent: center;
  alignItems: center;
`;
