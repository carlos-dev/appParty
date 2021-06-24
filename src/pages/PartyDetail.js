/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import {
  ScrollView, Dimensions, View, StyleSheet, Linking,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import IconCheck from 'react-native-vector-icons/AntDesign';
import { Snackbar } from 'react-native-paper';

import Header from '../components/Header';
import SnackbarComponent from '../components/Snackbar';
import Loading from '../components/Loading';

import { scaleFontSize } from '../utils/scaleFontSize';
import * as TriggerPresenceActions from '../store/actions/triggerPresence';
import * as InfoPartyActions from '../store/actions/infoParty';
import * as ProfileActions from '../store/actions/profile';

import {
  Button,
  TextButton,
  Footer,
  TitleFooter,
} from '../styles/globalStyles';

import party from '../assets/images/party.jpg';

const { width } = Dimensions.get('window');

function formatDate(time) {
  let hourSplit = time.split('T');

  hourSplit = hourSplit[1].split(':');

  return (
    <InfoDescription>
      {' '}
      {hourSplit[0]}
      :
      {hourSplit[1]}
    </InfoDescription>
  );
}

export default function PartyDetail({ navigation }) {
  const [visibleConfirmed, setVisibleConfirmed] = useState(false);
  const [visibleCanceled, setVisibleCanceled] = useState(false);
  const [presences, setPresences] = useState([]);
  const [date, setDate] = useState('');
  const [dateClose, setDateClose] = useState('');

  const { infoParty, profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const route = useRoute();

  useEffect(() => {
    dispatch(InfoPartyActions.infoPartyRequest(route.params.slug));
    dispatch(ProfileActions.profileRequest());
  }, []);

  useEffect(() => {
    if (infoParty.party) {
      let dateSplit = infoParty.party[0].date_init.split('T');
      let dateSplitClose = infoParty.party[0].date_close.split('T');

      dateSplitClose = dateSplitClose[0];
      dateSplit = dateSplit[0];
      dateSplit = dateSplit.split('-');
      dateSplitClose = dateSplitClose.split('-');

      setDate(`${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`);
      setDateClose(`${dateSplitClose[2]}/${dateSplitClose[1]}/${dateSplitClose[0]}`);

      const arrPresence = JSON.parse(infoParty.party[0].presences);

      console.log(parseFloat(infoParty.party[0].latitude));

      if (arrPresence.length && profile.profileData) {
        if (arrPresence[arrPresence.length - 1].user_id === profile.profileData.id) {
          setPresences(arrPresence);
        } else {
          setPresences([]);
        }
      } else {
        setPresences([]);
      }
    }
  }, [infoParty, profile]);

  function goToMap(partyData) {
    Linking.openURL(`https://www.google.com.br/maps/@${partyData.latitude},${partyData.longitude},15z`);
  }

  function triggerPresence() {
    dispatch(TriggerPresenceActions.triggerPresenceRequest(infoParty.party[0].party_slug));

    setTimeout(() => {
      dispatch(InfoPartyActions.infoPartyRequest(route.params.slug));
    }, 500);

    const arrPresence = JSON.parse(infoParty.party[0].presences);
    setTimeout(() => {
      if (arrPresence.length) {
        if (arrPresence[arrPresence.length - 1].user_id === profile.profileData.id) {
          setVisibleCanceled(true);
          setVisibleConfirmed(false);
        } else {
          setVisibleConfirmed(true);
          setVisibleCanceled(false);
        }
      } else {
        setVisibleConfirmed(true);
        setVisibleCanceled(false);
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
              {infoParty.party[0].banner_link ? (
                <Banner source={{ uri: infoParty.party[0].banner_link }} />
              ) : (
                <Banner source={party} />
              )}

              <Content>
                <TitleParty>{infoParty.party[0].name}</TitleParty>

                {infoParty.party[0].latitude ? (
                  <MapContainer>
                    <MapView
                      initialRegion={{
                        latitude: parseFloat(infoParty.party[0].latitude),
                        longitude: parseFloat(infoParty.party[0].longitude),
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.06,
                      }}
                      style={styles.map}
                    >
                      <MapView.Marker
                        coordinate={{
                          latitude: parseFloat(infoParty.party[0].latitude),
                          longitude: parseFloat(infoParty.party[0].longitude),
                        }}
                      />
                    </MapView>
                    <BtnLink onPress={() => goToMap(infoParty.party[0])}>
                      <TitleMap>Ver rotas no Google Maps</TitleMap>
                    </BtnLink>
                  </MapContainer>

                ) : (
                  <></>
                )}

                <ContentCheck>
                  <IconCheck name="check" color="#169a11" style={{ fontSize: scaleFontSize(14) }} />
                  <TextCheck>Esta festa está seguindo todos protocolos para evitar a tranmissão de COVID-19 definidos pela OMS</TextCheck>
                </ContentCheck>

                <InfoParty>
                  <Row>
                    <Column>
                      <InfoText>Data de início</InfoText>
                      <Label>
                        <InfoDescription>
                          {date}
                        </InfoDescription>
                      </Label>
                    </Column>

                    <Column>
                      <InfoText>Data de término</InfoText>
                      <Label>
                        <InfoDescription>
                          {dateClose}
                        </InfoDescription>
                      </Label>
                    </Column>

                  </Row>

                  <Row>
                    <Column>
                      <InfoText>Horário de início</InfoText>
                      <Label>
                        {formatDate(infoParty.party[0].date_init)}
                      </Label>
                    </Column>

                    <Column>
                      <InfoText>Horário de término</InfoText>
                      <Label>
                        {formatDate(infoParty.party[0].date_close)}
                      </Label>
                    </Column>
                  </Row>

                  <Row>
                    <Column style={{ width: '100%' }}>
                      <InfoText>Pessoas confirmadas</InfoText>
                      <Label style={{ height: 'auto', width: '100%' }}>
                        <InfoDescription>
                          {JSON.parse(infoParty.party[0].presences).length || 0}
                        </InfoDescription>
                      </Label>
                    </Column>
                  </Row>

                  {infoParty.party[0].ticket_link && (
                    <Row>
                      <Column style={{ width: '100%' }}>
                        <InfoText>Ingressos</InfoText>
                        <Button onPress={() => Linking.openURL(infoParty.party[0].ticket_link)} style={{ width: '100%' }}>
                          <TextButton>Comprar</TextButton>
                        </Button>
                      </Column>
                    </Row>
                  )}

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

                  {infoParty.party[0].atractions && (
                    <Row>
                      <Column style={{ width: '100%' }}>
                        <InfoText>Atrações</InfoText>
                        <Label style={{ height: 'auto', width: '100%' }}>
                          <InfoDescription>
                            {infoParty.party[0].atractions}
                          </InfoDescription>
                        </Label>
                      </Column>
                    </Row>
                  )}
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

                {presences.length ? (
                  <>
                    <Button
                      onPress={triggerPresence}
                      style={{
                        marginBottom: '25%', marginTop: '10%', width: '100%', backgroundColor: '#dc3232',
                      }}
                    >
                      <TextButton>Não vou</TextButton>
                    </Button>
                  </>
                ) : (
                  <Button onPress={triggerPresence} style={{ marginBottom: '25%', marginTop: '10%', width: '100%' }}>
                    <TextButton>Eu vou</TextButton>
                  </Button>
                )}
                {/*
                {presences.length && (
                <Button
                  onPress={triggerPresence}
                  style={{
                    marginBottom: '25%', marginTop: '10%', width: '100%', backgroundColor: '#dc3232',
                  }}
                >
                  <TextButton>Não vou</TextButton>
                </Button>
                )} */}

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
  padding: 30px 0 10px;
  justify-content: flex-start;
  font-size: ${scaleFontSize(20)}px;
  color: ${(props) => props.theme.primary};
`;

export const BtnLink = styled.TouchableOpacity`
  padding-top: 4%;
`;

export const ContentCheck = styled.View`
  width: 90%;
  flexDirection: row;
  justify-content: center;
  margin-top: 4%;
`;

export const TextCheck = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(9)}px;
  textAlign: center;
  margin-left: 1%;
`;

export const TitleMap = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(15)}px;
`;

export const InfoText = styled.Text`
  color: ${(props) => props.theme.primary};
  font-size: ${scaleFontSize(12)}px;
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
  width: 93%;
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
  align-items: center;
`;
export const Column = styled.View`
  width: 52%;
`;

export const styles = StyleSheet.create({
  map: {
    height: '85%',
    width: '100%',
  },
});
