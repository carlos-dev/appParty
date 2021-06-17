import React, { useEffect } from 'react';
import { ScrollView, BackHandler, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import { asyncStorage } from 'reactotron-react-native';
import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';
import Parties from '../components/Parties';

import * as GetThematicActions from '../store/actions/getThematic';
import * as PartyNextHoursActions from '../store/actions/partyNextHours';
import * as PartyHappeningNowActions from '../store/actions/partyHappeningNow';
import * as ToggleMenuActions from '../store/actions/toggleMenu';

import { scaleFontSize } from '../utils/scaleFontSize';

import { Container, globalStyles } from '../styles/globalStyles';

export default function Main({ navigation }) {
  const dispatch = useDispatch();
  const { getThematic, partyNextHours, partyHappeningNow } = useSelector((state) => state);

  useEffect(() => {
    dispatch(ToggleMenuActions.toggleMenu(false));

    async function getStorage() {
      const token = await asyncStorage.getItem('token');

      console.log('token', token);
    }

    // BackHandler.addEventListener('hardwareBackPress', () => {
    //   BackHandler.exitApp();
    // });

    setTimeout(() => {
      dispatch(GetThematicActions.getThematicRequest(1));
      dispatch(PartyNextHoursActions.partyNextHoursRequest(1));
      dispatch(PartyHappeningNowActions.partyHappeningNowRequest(1));
      getStorage();
    }, 2000);
  }, []);

  return (
    <Container>
      <Header navigation={navigation} />

      <BtnSearch activeOpacity={0.7} onPress={() => navigation.navigate('SearchParty')}>
        <IconSearch name="search" color="#666360" style={globalStyles.iconSearch} />

        <TextSearch>Buscar</TextSearch>
      </BtnSearch>

      <ScrollView>
        <Parties navigation={navigation} title="Acontecendo agora" partyData={partyHappeningNow} id="1" />

        <Parties navigation={navigation} title="Próximas horas" partyData={partyNextHours} id="2" />

        <Parties navigation={navigation} title="Festas temáticas" partyData={getThematic} id="3" />
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
