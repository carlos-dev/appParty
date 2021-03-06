/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import {
  Dimensions, Animated, StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';

import ModalComponent from './Modal';
import ModalDelete from './ModalDelete';

import * as ModalVisibleActions from '../store/actions/modalVisible';
import * as ModalDeleteActions from '../store/actions/modalDelete';
import * as ToggleMenuActions from '../store/actions/toggleMenu';

import { scaleFontSize } from '../utils/scaleFontSize';

const { width, height } = Dimensions.get('window');

export default function MenuContent({ navigation }) {
  const [widthMenu] = useState(new Animated.Value(0));
  const dispatch = useDispatch();

  const menuVislble = useSelector((state) => state.toggleMenu.toggleMenu);

  useEffect(() => {
    if (menuVislble) {
      Animated.timing(widthMenu, {
        toValue: 0,
        duration: 400,
      }).start();
    } else {
      Animated.timing(widthMenu, {
        toValue: width,
        duration: 400,
      }).start();
    }
  }, [menuVislble]);

  function handleNavigation(screen) {
    dispatch(ToggleMenuActions.toggleMenu(false));
    navigation.navigate(screen);
  }

  return (
    <Animated.View style={[styles.containerMenu, { transform: [{ translateX: widthMenu }] }]}>
      <ModalComponent navigation={navigation} />
      <ModalDelete navigation={navigation} />

      <Wrapper>
        <Item onPress={() => handleNavigation('Profile')}>
          <TextItem>Editar dados</TextItem>
        </Item>

        <Item onPress={() => dispatch(ModalDeleteActions.modalDelete(true))}>
          <TextItem>Excluir conta</TextItem>
        </Item>

        <Item onPress={() => dispatch(ModalVisibleActions.modalVisible(true))}>
          <TextItem>Sair</TextItem>
        </Item>
      </Wrapper>
    </Animated.View>

  );
}

export const Wrapper = styled.View`
  width: 70%;
  backgroundColor: #1e212d;
  height: 100%;
  alignSelf: flex-end;
`;

export const Item = styled.TouchableOpacity`
  borderTopWidth: 1px;
  borderTopColor: #000;
  width: 70%;
  alignSelf: center;
`;

export const TextItem = styled.Text`
  color: #fff;
  padding: 6.5% 0;
  textAlign: center;
  opacity: 0.5;
  fontSize: ${scaleFontSize(14)}px;
`;

const styles = StyleSheet.create({
  containerMenu: {
    position: 'absolute',
    marginTop: width * 0.2,
    width: '100%',
    height,
    zIndex: 1,
    transform: [{ translateX: width }],
  },
});
