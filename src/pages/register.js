/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-duplicates */
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/Feather';
import IconLock from 'react-native-vector-icons/Feather';
import IconCalendar from 'react-native-vector-icons/AntDesign';
import IconArrow from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { TextInputMask } from 'react-native-masked-text';
import { Snackbar } from 'react-native-paper';

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

const { width, height } = Dimensions.get('window');

export default function Register({ navigation }) {
  const { primary } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const user = useForm();
  const email = useForm();
  const [birthdate, setBirthdate] = useState('');
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

    if (register.error) {
      console.log(register);
      setVisible(true);
    }
  }, [register]);

  function signup() {
    const birthdateSplit = birthdate.split('/');
    const formattedDate = `${birthdateSplit[2]}/${birthdateSplit[1]}/${birthdateSplit[0]}`;

    if (user.value === '' || email.value === '' || birthdate === '' || password.value === '' || passwordConfirmation.value === '') {
      return;
    }

    if (password.value !== passwordConfirmation.value) {
      return;
    }

    const obj = {
      name: user.value,
      email: email.value,
      birthdate: formattedDate,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
      remember: true,
    };

    dispatch(RegisterActions.registerRequest(obj));
    console.log(register);
  }

  const onDismissSnackBar = () => setVisible(false);

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
        {/* <Input
          placeholder="Data de nascimento"
          placeholderTextColor="#535466"
          {...birthdate}
        /> */}

        <TextInputMask
          type="datetime"
          options={{
            format: 'DD/MM/YYYY',
          }}
          placeholder="Data de nascimento"
          placeholderTextColor="#535466"
          value={birthdate}
          onChangeText={(text) => {
            setBirthdate(text);
          }}
          style={styles.input}
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

      {register.error && (
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
  color: #fff;
`;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 8,
    paddingLeft: '15%',
    height: height * 0.07,
    fontSize: scaleFontSize(13),
    color: '#fff',
    backgroundColor: '#1e212d',
  },
});
