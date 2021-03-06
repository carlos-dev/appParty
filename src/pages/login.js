/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-duplicates */
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogin from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';
import { Snackbar } from 'react-native-paper';

import Input from '../components/Input';
import Loading from '../components/Loading';

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
  const [visible, setVisible] = useState(false);

  const email = useForm();
  const password = useForm();
  const dispatch = useDispatch();

  const { login } = useSelector((state) => state);

  useEffect(() => {
    async function signIn() {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.navigate('Main');
      }

      if (login.login) {
        if (typeof login.login.loginData === 'string') {
          await AsyncStorage.setItem('token', login.login.loginData);
          navigation.navigate('Main');
          email.setValue('');
          password.setValue('');

          email.setError(null);
          password.setError(null);
        }
      }

      if (login.error) {
        setVisible(true);
      }
    }

    signIn();
  }, [login]);

  function handleLogin() {
    const obj = { email: email.value, password: password.value, remember: true };

    dispatch(LoginActions.loginRequest(obj));
  }

  const onDismissSnackBar = () => setVisible(false);

  return (
    <Container style={{ justifyContent: 'center' }}>
      <>
        {login.loading && <Loading />}

        <Logo source={logo} resizeMode="contain" />

        <TitleFrom>Fa??a seu login</TitleFrom>

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

        {/* <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
          <TextPass>Esqueci minha senha</TextPass>
        </TouchableOpacity> */}
      </>

      <Footer onPress={() => navigation.navigate('Register')} activeOpacity={0.7}>
        <IconLogin name="login" color={primary} size={scaleFontSize(14)} />
        <TitleFooter>Criar uma conta</TitleFooter>
      </Footer>

      {login.error && (
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: '',
            onPress: () => {
              // Do something
            },
          }}
        >
          Ocorreu um erro, verifique suas credenciais
        </Snackbar>
      )}
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
