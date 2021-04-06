/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import {
  Dimensions, Animated, StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { scaleFontSize } from '../utils/scaleFontSize';

import * as ToggleMenuActions from '../store/actions/toggleMenu';

const { width, height } = Dimensions.get('window');

export default function MenuContent({ navigation }) {
  const [widthMenu] = useState(new Animated.Value(0));
  const dispatch = useDispatch();

  const menuVislble = useSelector((state) => state.toggleMenu.toggleMenu);

  function handleNavigation(screen) {
    dispatch(ToggleMenuActions.toggleMenu(false));
    navigation.navigate(screen);
  }

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

  return (
    <Animated.View style={[styles.containerMenu, { transform: [{ translateX: widthMenu }] }]}>
      <Wrapper>
        <Item onPress={() => handleNavigation('SurveyResearch')}>
          <TextItem>Pesquisa de opinião</TextItem>
        </Item>

        <Item onPress={() => handleNavigation('PrivacyPolicy')}>
          <TextItem>Política de privacidade</TextItem>
        </Item>

        <Item>
          <TextItem>Termo de uso</TextItem>
        </Item>

        <Item>
          <TextItem>Fale conosco</TextItem>
        </Item>

        <Item>
          <TextItem>Compartilhar aplicativo</TextItem>
        </Item>

        <Item onPress={() => handleNavigation('About')}>
          <TextItem>Sobre a VICHY</TextItem>
        </Item>
      </Wrapper>
    </Animated.View>

  );
}

export const ConteinerMenu = styled.View`
  position: absolute;
  marginTop: ${width * 0.2}px;
  width: 100%;
  height: 60%;
  backgroundColor: #1e212d; 
  zIndex: 1;
  overflow: hidden;
`;

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
