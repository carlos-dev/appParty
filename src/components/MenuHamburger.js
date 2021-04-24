import React from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';

import * as ToggleMenuActions from '../store/actions/toggleMenu';

const { width } = Dimensions.get('window');

export default function MenuHamburger() {
  const menuVislble = useSelector((state) => state.toggleMenu.toggleMenu);

  const dispatch = useDispatch();

  function toggleMenu() {
    dispatch(ToggleMenuActions.toggleMenu(!menuVislble));
  }

  return (
    <MenuContainer onPress={toggleMenu}>
      <MenuLine />
      <MenuLine />
      <MenuLine />
    </MenuContainer>
  );
}

export const MenuContainer = styled.TouchableOpacity`
  width: ${width * 0.079}px;
  height: ${width * 0.06}px;
  justifyContent: space-between;
`;

export const MenuLine = styled.View`
  backgroundColor: #606381;
  width: 100%;
  height: ${width * 0.012}px;
  borderRadius: 10px;
`;
