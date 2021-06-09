/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-duplicates */
import React, { useContext, useEffect } from 'react';
import { Dimensions } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import IconLock from 'react-native-vector-icons/Feather';
import IconCalendar from 'react-native-vector-icons/AntDesign';
import IconArrow from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '../components/Loading';
import Input from '../components/Input';

import useForm from '../hooks/useForm';
import { scaleFontSize } from '../utils/scaleFontSize';
import * as RegisterActions from '../store/actions/register';

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

export default function Register({ navigation }) {
  const { primary } = useContext(ThemeContext);
  const user = useForm();
  const email = useForm();
  const birthdate = useForm();
  const password = useForm();
  const passwordConfirmation = useForm();
  const dispatch = useDispatch();

  const { register } = useSelector((state) => state);

  useEffect(() => {
    if (register.registerData) {
      if (register.registerData.registerData === 200) {
        navigation.navigate('Main');
      }
    }

    console.log(register);
  }, [register]);

  function signup() {
    const birthdateSplit = birthdate.value.split('/');
    const formattedDate = `${birthdateSplit[2]}/${birthdateSplit[1]}/${birthdateSplit[0]}`;

    const obj = {
      name: user.value,
      email: email.value,
      birthdate: formattedDate,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
      remember: true,
    };

    dispatch(RegisterActions.registerRequest(obj));
  }

  return (
    <Container style={{ justifyContent: 'center' }}>
      {register.loading && <Loading />}

      <Logo source={logo} resizeMode="contain" />

      <TitleFrom>Crie sua conta</TitleFrom>

      <ViewInput>
        <IconUser name="user" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Nome"
          placeholderTextColor="#535466"
          {...user}
        />
      </ViewInput>

      <ViewInput>
        <IconEmail name="email-outline" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Email"
          placeholderTextColor="#535466"
          {...email}
        />
      </ViewInput>

      <ViewInput>
        <IconCalendar name="calendar" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Data de nascimento"
          placeholderTextColor="#535466"
          {...birthdate}
        />
      </ViewInput>

      <ViewInput>
        <IconLock name="lock" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Senha"
          placeholderTextColor="#535466"
          secureTextEntry
          {...password}
        />
      </ViewInput>

      <ViewInput>
        <IconLock name="lock" color="#666360" style={globalStyles.iconForm} />
        <Input
          placeholder="Confirme a senha"
          placeholderTextColor="#535466"
          secureTextEntry
          {...passwordConfirmation}
        />
      </ViewInput>

      <Button onPress={signup} activeOpacity={0.7}>
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
