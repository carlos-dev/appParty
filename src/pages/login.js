/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-duplicates */
import React, { useContext } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogin from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';

import SnackbarComponent from '../components/Snackbar';
import Input from '../components/Input';

import { scaleFontSize } from '../utils/scaleFontSize';
import useForm from '../hooks/useForm';
import * as LoginActions from '../store/actions/login';

import {
  Container,
  ViewInput,
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
  const { primary } = useContext(ThemeContext);
  const email = useForm();
  const password = useForm();
  const dispatch = useDispatch();

  function handleLogin() {
    const obj = { email: email.value, password: password.value, remember: true };

    dispatch(LoginActions.loginRequest(obj));

    // navigation.navigate('Main');

    // const emailContent = email.value;
    // const passwordContent = password.value;

    // fetch('https://app-party-users.herokuapp.com/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email: emailContent, password: passwordContent, remember: true }),
    // }).then((response) => {
    //   console.log(response);
    //   return response.json();
    // }).then((json) => {
    //   console.log(json);
    //   return json;
    // });
  }

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
            {...email}
            type="username"
          />
        </ViewInput>

        <ViewInput>
          <IconLock name="lock" color="#666360" style={globalStyles.iconForm} />
          <Input
            placeholder="Senha"
            placeholderTextColor="#535466"
            secureTextEntry
            type="password"
            {...password}
          />
        </ViewInput>

        <Button onPress={handleLogin}>
          <TextButton>Entrar</TextButton>
        </Button>

        <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
          <TextPass>Esqueci minha senha</TextPass>
        </TouchableOpacity>
      </>

      <Footer onPress={() => navigation.navigate('Register')} activeOpacity={0.7}>
        <IconLogin name="login" color={primary} size={scaleFontSize(14)} />
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
