import React, { useEffect } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';

import * as GetThematicActions from '../store/actions/getThematic';
import * as PartyNextHoursActions from '../store/actions/partyNextHours';

import { scaleFontSize } from '../utils/scaleFontSize';

import party from '../assets/images/party.jpg';

import {
  Container,
  TitleMain,
  globalStyles,
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
import Parties from '../components/Parties';

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
    </Cards>
  );
}

export default function Main({ navigation }) {
  const dispatch = useDispatch();
  const { getThematic, partyNextHours } = useSelector((state) => state);

  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );

  useEffect(() => {
    async function getParties() {
      if (!getThematic.thematicData) {
        await dispatch(GetThematicActions.getThematicRequest(1));
      }

      await dispatch(PartyNextHoursActions.partyNextHoursRequest(1));
    }

    getParties();
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />

      <BtnSearch activeOpacity={0.7} onPress={() => navigation.navigate('SearchParty')}>
        <IconSearch name="search" color="#666360" style={globalStyles.iconSearch} />

        <TextSearch>Buscar</TextSearch>
      </BtnSearch>

      <ScrollView>
        <Parties navigation={navigation} title="Próximas horas" partyData={partyNextHours} />

        <Parties navigation={navigation} title="Festas temáticas" partyData={getThematic} />

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

export const ScrollView = styled.ScrollView`
  
`;
