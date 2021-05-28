import React from 'react';
import styled from 'styled-components/native';
import IconSearch from 'react-native-vector-icons/EvilIcons';

import Header from '../components/Header';

import { scaleFontSize } from '../utils/scaleFontSize';

import {
  Container,
  globalStyles,
} from '../styles/globalStyles';

export default function SearchParty({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />

      <ViewInput>
        <IconSearch name="search" color="#666360" style={globalStyles.iconSearch} />
        <Search
          placeholder="Buscar"
          placeholderTextColor="#535466"
        />
      </ViewInput>
    </Container>
  );
}

export const ViewInput = styled.View`
  backgroundColor: ${(props) => props.theme.secondary};
  flexDirection: row;
  alignItems: center;
  marginTop: 5%;
  paddingLeft: 2%;
  width: 93%;
`;

export const Search = styled.TextInput`
  fontSize: ${scaleFontSize(13)}px;
  color: #fff;
  padding: 4% 2%;
  width: 100%;
`;
