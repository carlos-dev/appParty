/* eslint-disable import/no-duplicates */
import React, { useContext } from 'react';
import { Dimensions } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconArrow from 'react-native-vector-icons/AntDesign';

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

const { width } = Dimensions.get('window');

export default function RecoverPassword({ navigation }) {
  const { primary } = useContext(ThemeContext);

  return (
    <Container style={{ justifyContent: 'center' }}>
      <>
        <TitleFrom>Insira seu e-mail</TitleFrom>

        <ViewInput>
          <IconEmail name="email-outline" color="#666360" style={globalStyles.iconForm} />
          <Input
            placeholder="E-mail"
            placeholderTextColor="#535466"
          />
        </ViewInput>

        <Button onPress={() => navigation.navigate('Main')} activeOpacity={0.7}>
          <TextButton>Entrar</TextButton>
        </Button>
      </>

      <Footer onPress={() => navigation.navigate('Login')} activeOpacity={0.7}>
        <IconArrow name="arrowleft" color={primary} size={scaleFontSize(14)} />
        <TitleFooter>Voltar para o login</TitleFooter>
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
