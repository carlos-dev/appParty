import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import MenuHamburger from './MenuHamburger';
import MenuContent from './MenuContent';

import logo from '../assets/images/logo.png';

const { width } = Dimensions.get('window');

export default function Header({ navigation }) {
  return (
    <Container>
      <Wrapper>
        <Logo source={logo} resizeMode="contain" />
        <MenuHamburger />
      </Wrapper>

      <MenuContent navigation={navigation} />
    </Container>
  );
}

export const Container = styled.View`
  width: 100%;
`;

export const Wrapper = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  width: 100%;
  backgroundColor: ${(props) => props.theme.secondary};
  height: ${width * 0.2}px;
  alignItems: center;
  padding: 0 5%
`;

export const Logo = styled.Image`
  width: ${width * 0.1}px;
  height: ${width * 0.1}px;
`;
