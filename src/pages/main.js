import React, { useEffect } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';

import * as GetPartiesActions from '../store/actions/getParties';

import { scaleFontSize } from '../utils/scaleFontSize';

import party from '../assets/images/party.jpg';

import {
  Container,
  TitleMain,
  globalStyles,
} from '../styles/globalStyles';

const { width } = Dimensions.get('window');

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

function Item({ item, navigation }) {
  return (
    <Cards>
      <Card activeOpacity={0.9} onPress={() => navigation.navigate('PartyDetail')}>
        <Background source={party}>
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
        </Background>
      </Card>
    </Cards>
  );
}

export default function Main({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPartiesActions.partiesRequest());
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />

      <BtnSearch activeOpacity={0.7} onPress={() => navigation.navigate('SearchParty')}>
        <IconSearch name="search" color="#666360" style={globalStyles.iconSearch} />

        <TextSearch>Buscar</TextSearch>
      </BtnSearch>

      <ScrollView>
        <WrapperParties>
          <TitleMain>Festas badaladas</TitleMain>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            nestedScrollEnabled
          />
        </WrapperParties>

        <WrapperParties>
          <TitleMain>Acontecendo agora</TitleMain>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            nestedScrollEnabled
          />
        </WrapperParties>

        <WrapperParties>
          <TitleMain>Nas próximas horas</TitleMain>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </WrapperParties>

        <WrapperParties>
          <TitleMain>Festas temáticas</TitleMain>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </WrapperParties>

      </ScrollView>

      <SnackbarComponent />
    </Container>
  );
}

export const WrapperParties = styled.View`
  alignItems: flex-start;
  width: 96%;
  paddingTop: 10%;
  marginBottom: 1%;
  flex: 1;
`;

export const Search = styled.TextInput`
  backgroundColor:  ${(props) => props.theme.secondary};
  width: 100%;
  marginTop: 2%;
  paddingLeft: 15%;
  color: #fff;
`;

export const TextSearch = styled.Text`
  fontSize: ${scaleFontSize(13)}px;
  color: #666360;
  marginLeft: 2%;
`;

export const BtnSearch = styled.TouchableOpacity`
  backgroundColor:  ${(props) => props.theme.secondary};
  width: 96%;
  marginTop: 5%;
  marginBottom: 2%;
  flexDirection: row;
  padding: 3% 2%;
`;

export const Cards = styled.View`
  flex: 1;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width:  ${width * 0.85}px;
  height: ${width * 0.7}px;
  marginRight: 15px;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justifyContent: flex-end;
`;

export const Info = styled.View`
  backgroundColor: ${(props) => props.theme.secondary};
  height: 35%;
  width: 100%;
  padding: 4% 6% 0 6%;
`;

export const Details = styled.View`
  justifyContent: space-between;
  flexDirection: row;
`;

export const ItemDetails = styled.View`
  marginTop: 1%;
  alignItems: center;
`;

export const TextDetails = styled.Text`
  fontSize: ${scaleFontSize(11)}px;
  color: #827f7e;
`;

export const Number = styled.Text`
  fontSize: ${scaleFontSize(15)}px;
  color: ${(props) => props.theme.primary};
`;

export const ScrollView = styled.ScrollView`
  
`;

export const Name = styled.Text`
  fontSize: ${scaleFontSize(18)}px;
  color: ${(props) => props.theme.primary};
`;
