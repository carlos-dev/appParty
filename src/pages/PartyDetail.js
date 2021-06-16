import React, { useEffect, useState } from 'react';
import {
  ScrollView, Dimensions, View, StyleSheet, Linking,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { Snackbar } from 'react-native-paper';
import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';
import Loading from '../components/Loading';

import { scaleFontSize } from '../utils/scaleFontSize';
import * as TriggerPresenceActions from '../store/actions/triggerPresence';
import * as InfoPartyActions from '../store/actions/infoParty';

import {
  Button,
  TextButton,
  Footer,
  TitleFooter,
} from '../styles/globalStyles';

import party from '../assets/images/party.jpg';

const { width } = Dimensions.get('window');

function formatDate(partyData) {
  let hourInit = new Date(partyData.date_init).getUTCHours();
  let hourClose = new Date(partyData.date_close).getUTCHours();
  let minutesInit = new Date(partyData.date_init).getUTCMinutes();
  let minutesClose = new Date(partyData.date_close).getUTCMinutes();

  if (hourInit < 10) {
    hourInit = `0${hourInit}`;
  }

  if (hourClose < 10) {
    hourClose = `0${hourClose}`;
  }

  if (minutesInit < 10) {
    minutesInit = `0${minutesInit}`;
  }

  if (minutesClose < 10) {
    minutesClose = `0${minutesClose}`;
  }

  return (
    <InfoDescription>
      {' '}
      {hourInit}
      :
      {minutesInit}
      {' '}
      ás
      {' '}
      {hourClose}
      :
      {minutesClose}
      {' '}
    </InfoDescription>
  );
}

export default function PartyDetail({ navigation }) {
  const [visibleConfirmed, setVisibleConfirmed] = useState(false);
  const [visibleCanceled, setVisibleCanceled] = useState(false);

  const { infoParty } = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();

  useEffect(() => {
    dispatch(InfoPartyActions.infoPartyRequest(route.params.slug));
  }, []);

  function goToMap(partyData) {
    console.log(partyData);
    Linking.openURL(`https://www.google.com.br/maps/@${partyData.latitude},${partyData.longitude},15z`);
  }

  function triggerPresence() {
    dispatch(TriggerPresenceActions.triggerPresenceRequest(infoParty.party[0].party_slug));

    dispatch(InfoPartyActions.infoPartyRequest(route.params.slug));

    setTimeout(() => {
      if (!JSON.parse(infoParty.party[0].presences).length) {
        setVisibleConfirmed(true);
        setVisibleCanceled(false);
      } else {
        setVisibleCanceled(true);
        setVisibleConfirmed(false);
      }
    }, 2000);
  }

  const onDismissSnackBar = () => setVisibleConfirmed(false);
  const onCanceledSnackBar = () => setVisibleCanceled(false);

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      {infoParty.loading ? <Loading /> : (
        <>
          <ScrollView>
            <Container>
              <Banner source={party} />
              <Content>
                <TitleParty>{infoParty.party[0].name}</TitleParty>

                <MapContainer>
                  <MapView
                    initialRegion={{
                      latitude: infoParty.party[0].latitude,
                      longitude: infoParty.party[0].longitude,
                      latitudeDelta: 0.05,
                      longitudeDelta: 0.06,
                    }}
                    style={styles.map}
                  >
                    <MapView.Marker
                      coordinate={{
                        latitude: infoParty.party[0].latitude,
                        longitude: infoParty.party[0].longitude,
                      }}
                    />
                  </MapView>
                  <BtnLink onPress={() => goToMap(infoParty.party[0])}>
                    <TitleMap>Ver rotas no Google Maps</TitleMap>
                  </BtnLink>
                </MapContainer>

                <InfoParty>
                  <Row>
                    <Column>
                      <InfoText>Horário</InfoText>
                      <Label>
                        {formatDate(infoParty.party[0])}
                      </Label>
                    </Column>
                    <Column>
                      <InfoText>Pessoas confirmadas</InfoText>
                      <Label>
                        <InfoDescription>
                          {JSON.parse(infoParty.party[0].presences).length}
                        </InfoDescription>
                      </Label>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <InfoText>Ingressos</InfoText>
                      <Button onPress={() => Linking.openURL(infoParty.party[0].ticket_link)}>
                        <TextButton>Comprar</TextButton>
                      </Button>
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ width: '100%' }}>
                      <InfoText>Descrição do Evento</InfoText>
                      <Label style={{ height: 'auto', width: '100%' }}>
                        <InfoDescription>
                          {infoParty.party[0].description}
                        </InfoDescription>
                      </Label>
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ width: '100%' }}>
                      <InfoText>Endereço</InfoText>
                      <Label style={{ width: '100%', textAlign: 'left' }}>
                        <InfoDescription>
                          {infoParty.party[0].address}
                          ,
                          {' '}
                          {infoParty.party[0].number}
                          ,
                          {' '}
                          {infoParty.party[0].district}
                          ,
                          {' '}
                          {infoParty.party[0].city}
                          ,
                          {' '}
                          {infoParty.party[0].state}
                        </InfoDescription>
                      </Label>
                    </Column>
                  </Row>
                </InfoParty>

                {JSON.parse(infoParty.party[0].presences).length ? (
                  <>
                    <Button onPress={triggerPresence} style={{ marginBottom: '25%', marginTop: '10%', width: '100%' }}>
                      <TextButton>Não vou</TextButton>
                    </Button>
                  </>
                ) : (
                  <Button onPress={triggerPresence} style={{ marginBottom: '25%', marginTop: '10%', width: '100%' }}>
                    <TextButton>Eu vou</TextButton>
                  </Button>
                )}
              </Content>
            </Container>
          </ScrollView>

          <Snackbar
            visible={visibleConfirmed}
            onDismiss={onDismissSnackBar}
            style={{ backgroundColor: '#088710' }}
            action={{
              label: '',
              onPress: () => {
                // Do something
              },
            }}
          >
            Presença Confirmada
          </Snackbar>

          <Snackbar
            visible={visibleCanceled}
            onDismiss={onCanceledSnackBar}
            style={{ backgroundColor: '#dc3232' }}
            action={{
              label: '',
              onPress: () => {
                // Do something
              },
            }}
          >
            Presença Cancelada
          </Snackbar>

          <Footer activeOpacity={0.7} onPress={() => navigation.navigate('Main')}>
            <TitleFooter>Voltar</TitleFooter>
          </Footer>
        </>
      )}

      <SnackbarComponent />
    </View>
  );
}

export const Container = styled.View`
  background: ${(props) => props.theme.background};
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  width: ${width * 0.9}px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: ${width * 0.5}px;
`;

export const TitleParty = styled.Text`
  padding: 20px 0 10px;
  justify-content: flex-start;
  font-size: ${scaleFontSize(20)}px;
  color: ${(props) => props.theme.primary};
`;

export const BtnLink = styled.TouchableOpacity`
  padding-top: 4%;
`;

export const TitleMap = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(15)}px;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(15)}px;
  padding: 0 10px 10px;
`;

export const InfoDescription = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(13)}px;
  padding: 0 10px;
`;

export const Label = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0 10px;
  background-color: #3e3b47;
  border-radius: 10px;
  height: auto;
  width: 90%;
`;

export const MapContainer = styled.View`
  display: flex;
  align-items: center;
  background-color: #3e3b47;
  height: ${width * 0.9}px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const Map = styled.Image`
  display: flex;
  align-items: center;
  background-color: #000;
  height: 85%;
  width: 100%;
  border-radius: 20px;
`;

export const InfoParty = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const Row = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
`;
export const Column = styled.View`
  width: 50%;
`;

export const styles = StyleSheet.create({
  map: {
    height: '85%',
    width: '100%',
  },
});
