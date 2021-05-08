import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import IconLock from 'react-native-vector-icons/Feather';
import IconCalendar from 'react-native-vector-icons/AntDesign';
import IconArrow from 'react-native-vector-icons/AntDesign';
import { scaleFontSize } from '../utils/scaleFontSize';

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

export default function Register({ navigation }) {
  const { primary } = useContext(ThemeContext);

  return (
    <Container style={{ justifyContent: 'center' }}>
      <Logo source={logo} resizeMode="contain" />

      <TitleFrom>Crie sua conta</TitleFrom>

      <ViewInput>
        <IconUser name="user" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Nome"
          placeholderTextColor="#535466"
        />
      </ViewInput>

      <ViewInput>
        <IconEmail name="email-outline" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Email"
          placeholderTextColor="#535466"
        />
      </ViewInput>

      <ViewInput>
        <IconCalendar name="calendar" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Data de nascimento"
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

      <Button activeOpacity={0.7}>
        <TextButton>Entrar</TextButton>
      </Button>

      <Footer onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
        <IconArrow name="arrowleft" color={primary} size={scaleFontSize(14)} />
        <TitleFooter>Voltar para o login</TitleFooter>
      </Footer>
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
  color: #fff;
`;
