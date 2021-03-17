import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { scaleFontSize } from '../utils/scaleFontSize';

import { Container, Input, Button, TextButton } from '../styles/globalStyles'

import logo from '../assets/images/login_03.png'

const { width } = Dimensions.get('window')

export default function Login() {
  return (
    <Container>
      <Logo source={logo} resizeMode='contain' />

      <Title>Faça seu login</Title>

      <Input 
        placeholder='E-mail'
        placeholderTextColor='#535466'
      />
      
      <Input 
        placeholder='Senha'
        placeholderTextColor='#535466'
        secureTextEntry
      />

      <Button>
        <TextButton>Entrar</TextButton>
      </Button>
    </Container>
  )
}

export const Logo = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.4}px;
`;

export const Title = styled.Text`
  fontSize: ${scaleFontSize(22)}px;
`;

