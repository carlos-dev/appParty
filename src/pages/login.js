import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import IconEmail from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogin from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLock from 'react-native-vector-icons/Feather';

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
  styles 
} from '../styles/globalStyles'

import logo from '../assets/images/login_03.png'

const { width } = Dimensions.get('window')

export default function Login({navigation}) {
  return (
    <Container style={{justifyContent: 'center'}}>
      <>
        <Logo source={logo} resizeMode='contain' />

        <TitleFrom>Faça seu login</TitleFrom>

        <ViewInput>
          <IconEmail name='email-outline' color='#666360' style={styles.iconForm} />
          <Input 
            placeholder='E-mail'
            placeholderTextColor='#535466'
          />
        </ViewInput>
        
        <ViewInput>
          <IconLock name='lock' color='#666360' style={styles.iconForm} />
          <Input 
            placeholder='Senha'
            placeholderTextColor='#535466'
            secureTextEntry
          />
        </ViewInput>

        <Button activeOpacity={0.7}>
          <TextButton>Entrar</TextButton>
        </Button>

        <TouchableOpacity>
          <TextPass>Esqueci minha senha</TextPass>
        </TouchableOpacity>
      </>

      <Footer activeOpacity={0.7} >
        <IconLogin name='login' color='#404040' size={scaleFontSize(14)} />
        <TitleFooter>Criar uma conta</TitleFooter>
      </Footer>
    </Container>
  )
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

