/* eslint-disable import/no-duplicates */
import React, { useEffect } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogin from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';
import NetInfo from '@react-native-community/netinfo';

import { scaleFontSize } from '../utils/scaleFontSize';
import SnackbarComponent from '../components/Snackbar';

import {
  Container,
  ViewInput,
  Input,
  Button,
  TextButton,
  TitleFrom,
  Footer,
  TitleFooter,
  globalStyles,
} from '../styles/globalStyles';

import logo from '../assets/images/logo.png';

const { width } = Dimensions.get('window');

export default function Login({ navigation }) {
  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener((state) => {
  //     console.log('Tipo de conexão', state.type);
  //     console.log('Está conectado?', state.isConnected);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  return (
    <Container style={{ justifyContent: 'center' }}>
      <>
        <Logo source={logo} resizeMode="contain" />

        <TitleFrom>Faça seu login</TitleFrom>

        <ViewInput>
          <IconEmail name="email-outline" color="#666360" style={globalStyles.iconForm} />
          <Input
            placeholder="E-mail"
            placeholderTextColor="#535466"
          />
        </ViewInput>

        <ViewInput>
          <IconLock name="lock" color="#666360" style={globalStyles.iconForm} />
          <Input
            placeholder="Senha"
            placeholderTextColor="#535466"
            secureTextEntry
          />
        </ViewInput>

        <Button onPress={() => navigation.navigate('Main')} activeOpacity={0.7}>
          <TextButton>Entrar</TextButton>
        </Button>

        <TouchableOpacity>
          <TextPass>Esqueci minha senha</TextPass>
        </TouchableOpacity>
      </>

      <Footer onPress={() => navigation.navigate('Register')} activeOpacity={0.7}>
        <IconLogin name="login" color="#fff" size={scaleFontSize(14)} />
        <TitleFooter>Criar uma conta</TitleFooter>
      </Footer>
      <SnackbarComponent />
    </Container>
  );
}

export const Logo = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.2}px;
  marginBottom: ${width * 0.2}px;;
`;

export const TextPass = styled.Text`
  marginTop: 6%;
  fontSize: ${scaleFontSize(12)}px;
  color:  ${(props) => props.theme.primary};
`;
