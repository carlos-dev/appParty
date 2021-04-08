/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'react-native-image-picker';

import IconArrow from 'react-native-vector-icons/AntDesign';
import IconPower from 'react-native-vector-icons/Feather';
import IconCamera from 'react-native-vector-icons/Feather';
import IconUser from 'react-native-vector-icons/Feather';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';

import photoExample from '../assets/images/profile.jpg';

import {
  Container, ViewInput, Input, styles,
} from '../styles/globalStyles';
import { scaleFontSize } from '../utils/scaleFontSize';

const { width, height } = Dimensions.get('window');

export default function Profile() {
  const [photo, setPhoto] = useState(null);
  function takePicture() {
    const options = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        setPhoto(source);
      }
    });
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
        <Header>
          <IconArrow name="arrowleft" size={scaleFontSize(20)} color="#fff" />

          <TextHeader>Meu Perfil</TextHeader>

          <IconPower name="power" size={scaleFontSize(20)} color="#fff" />
        </Header>

        <WrapperPhoto>
          <Photo source={photo || photoExample} />

          <BtnPhoto activeOpacity={0.7} onPress={takePicture}>
            <IconCamera name="camera" size={scaleFontSize(20)} color="#fff" />
          </BtnPhoto>

        </WrapperPhoto>

        <Form>
          <Inputs>
            <ViewInput>
              <IconUser name="user" color="#666360" style={styles.iconForm} />
              <Input
                placeholder="Nome"
                placeholderTextColor="#535466"
              />
            </ViewInput>

            <ViewInput>
              <IconEmail name="email-outline" color="#666360" style={styles.iconForm} />
              <Input
                placeholder="E-mail"
                placeholderTextColor="#535466"
              />
            </ViewInput>

            <ViewInput>
              <IconLock name="lock" color="#666360" style={styles.iconForm} />
              <Input
                placeholder="Senha atual"
                placeholderTextColor="#535466"
                secureTextEntry
              />
            </ViewInput>

            <ViewInput>
              <IconLock name="lock" color="#666360" style={styles.iconForm} />
              <Input
                placeholder="Nova senha"
                placeholderTextColor="#535466"
                secureTextEntry
              />
            </ViewInput>

            <ViewInput>
              <IconLock name="lock" color="#666360" style={styles.iconForm} />
              <Input
                placeholder="Confirmar senha"
                placeholderTextColor="#535466"
                secureTextEntry
              />
            </ViewInput>
          </Inputs>

          <BtnConfirm>
            <TextButton>Salvar</TextButton>
          </BtnConfirm>
        </Form>
      </ScrollView>
    </Container>
  );
}

export const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  width: 90%;
  height: 12%;
  alignItems: center;
`;

export const TextHeader = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(20)}px;
`;

export const WrapperPhoto = styled.View`
  backgroundColor: #2d5bc3;
  borderRadius: 200px;
  padding: 3%;
  position: relative;
  marginBottom: 5%;
`;

export const Photo = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.5}px;
  borderRadius: 100px;
`;

export const Form = styled.View`
  width: 100%;
  alignItems: center;
  justifyContent: space-between;
  paddingBottom: 35%;
  height: 75%;
`;

export const Inputs = styled.View`
  width: 100%;
  alignItems: center;
`;

export const BtnPhoto = styled.TouchableOpacity`
  backgroundColor: #3897ff;
  borderRadius: 100px;
  position: absolute;
  padding: 5%;
  alignItems: center;
  justifyContent: center;
  bottom: 0;
  right: 0;
`;

export const BtnConfirm = styled.TouchableOpacity`
  width: 80%;
  height: ${height * 0.07}px;
  backgroundColor: #2870d4;
  borderRadius: 8px;
  justifyContent: center;
  alignItems: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(13)}px;
`;
