import React from 'react';
import {
  ScrollView, Dimensions, View, StyleSheet, Linking,
} from 'react-native';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { scaleFontSize } from '../utils/scaleFontSize';

import Header from '../components/Header';

import colors from '../styles/colors';

import {
  Button,
  TextButton,
  Footer,
  TitleFooter,
} from '../styles/globalStyles';

const { width } = Dimensions.get('window');

export default function PartyDetail({ navigation }) {
  const url = 'https://www.google.com.br/maps/@-23.0152459,-43.4496478,15z';
  function goToMap() {
    Linking.openURL(url);
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <Container>
          <Content>
            <TitleParty>Sua festa é aqui, confira!</TitleParty>

            <MapContainer>
              {/* <Map source={mapaImg} /> */}
              <MapView
                initialRegion={{
                  latitude: -23.0163676,
                  longitude: -43.4631791,
                  latitudeDelta: 0.05,
                  longitudeDelta: 0.06,
                }}
                style={styles.map}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: -23.0163676,
                    longitude: -43.4631791,
                  }}
                />
              </MapView>
              <BtnLink onPress={() => goToMap(url)}>
                <TitleMap>Ver rotas no Google Maps</TitleMap>
              </BtnLink>
            </MapContainer>

            <InfoParty>
              <Row>
                <Column>
                  <InfoText>Horário</InfoText>
                  <Label>
                    <InfoDescription> 19:00 ás 05:00 </InfoDescription>
                  </Label>
                </Column>
                <Column>
                  <InfoText>Amigos</InfoText>
                  <InfoDescription>
                    Voce não tem amigos nessa festa
                    {' '}
                  </InfoDescription>
                </Column>
              </Row>
              <Row>
                <Column>
                  <InfoText>Ingressos</InfoText>
                  <InfoDescription>Compre aqui</InfoDescription>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: '100%' }}>
                  <InfoText>Descrição do Evento</InfoText>
                  <Label style={{ height: 'auto', width: '100%' }}>
                    <InfoDescription>
                      Novo trojan rouba quase 900 mil senhas de brasileiros: a
                      descoberta foi feita pela ISH Tecnologia, empresa
                      brasileira de cibersegurança. O trojan já infectou cerca
                      de 500 mil vítimas no Brasil através de uma campanha de
                      phishing por email, cobrando boletos em atraso. Segundo a
                      ISH, a campanha ainda está ativa e o número de vítimas
                      deve se multiplicar nos próximos dias. As informações são
                      da CISO Advisor.
                    </InfoDescription>
                  </Label>
                </Column>
              </Row>
              <Row>
                <Column>
                  <InfoText>Aproveite</InfoText>
                  <Row>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                    <Column>
                      <InfoDescription>Icon</InfoDescription>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </InfoParty>
            <Button onPress={() => navigation.navigate('Main')}>
              <TextButton>Eu vou</TextButton>
            </Button>
          </Content>
        </Container>
      </ScrollView>

      <Footer activeOpacity={0.7} onPress={() => navigation.navigate('Main')}>
        <TitleFooter>Voltar</TitleFooter>
      </Footer>
    </View>
  );
}

export const Container = styled.View`
  background: ${colors.background};
  color: ${colors.primary};
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  width: ${width * 0.9};
`;

export const TitleParty = styled.Text`
  padding: 20px 0 10px;
  justify-content: flex-start;
  font-size: ${scaleFontSize(20)}px;
  color: ${colors.primary};
`;

export const BtnLink = styled.TouchableOpacity`
  padding-top: 4%;
`;

export const TitleMap = styled.Text`
  color: ${colors.primary};
  font-size: ${scaleFontSize(15)}px;
`;

export const InfoText = styled.Text`
  color: ${colors.primary};
  font-size: ${scaleFontSize(18)}px;
  padding: 0 10px 10px;
`;

export const InfoDescription = styled.Text`
  color: ${colors.primary};
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
  height: ${width * 0.9};
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
