import React, { useEffect } from 'react';
import { Dimensions, FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Header from '../components/Header';

import { scaleFontSize } from '../utils/scaleFontSize';

import {
  Container,
  Cards,
  Card,
  ImgBackground,
  Info,
  Details,
  ItemDetails,
  TextDetails,
  Number,
  Name,
  TitleMain,
} from '../styles/globalStyles';

import party from '../assets/images/party.jpg';

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
  {
    id: '52694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({ item, navigation }) {
  return (
    <Card activeOpacity={0.9} onPress={() => navigation.navigate('PartyDetail')} style={{ marginBottom: '8%' }}>
      <ImgBackground source={party}>
        <Info>
          <Name>Color Fest</Name>

          <Details>
            <ItemDetails>
              <TextDetails>Confirmados</TextDetails>
              <Number>10</Number>
            </ItemDetails>

            <ItemDetails>
              <TextDetails>Estilo da festa</TextDetails>
              <TextDetails>Paint Fest</TextDetails>
            </ItemDetails>

            <ItemDetails>
              <TextDetails>Rolando...</TextDetails>
            </ItemDetails>
          </Details>
        </Info>
      </ImgBackground>
    </Card>
  );
}

export default function PartyTheme({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );

  return (
    <Container>
      <Header navigation={navigation} />

      <ScrollView>
        <TitleMain style={{ marginTop: '3%' }}>Festas badaladas</TitleMain>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReachedThreshold={0.1}
          onEndReached={() => console.log('ok')}
        />
      </ScrollView>
    </Container>
  );
}
