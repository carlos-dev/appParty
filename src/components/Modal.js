import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Modal, StyleSheet } from 'react-native';

import { scaleFontSize } from '../utils/scaleFontSize';

import * as ModalVisibleActions from '../store/actions/modalVisible';

function ModalComponent({ navigation }) {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state) => state.modalVisible.modalVisible);

  function closeApp() {
    // AsyncStorage.clean('token')
    navigation.navigate('Login');
    dispatch(ModalVisibleActions.modalVisible(false));
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalVisible}
    >
      <ViewModal>
        <Box>
          <Title>Tem certeza que deseja sair?</Title>
          <Buttons>
            <Btn onPress={closeApp}>
              <TextButton>Sim</TextButton>
            </Btn>

            <Btn onPress={() => dispatch(ModalVisibleActions.modalVisible(false))}>
              <TextButton>Não</TextButton>
            </Btn>
          </Buttons>
        </Box>

      </ViewModal>
    </Modal>
  );
}

export const ViewModal = styled.View`
  backgroundColor: rgba(0, 0, 0, 0.6);
  height: 100%;
  alignItems: center;
  justifyContent: center;
`;

export const Box = styled.View`
  backgroundColor: #364;
  justifyContent: flex-end;
  alignItems: center;
  borderRadius: 10px;
  width: 70%;
  height: 25%;
  position: relative;
`;

export const Title = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(14)}px;
  width: 90%;
  textAlign: center;
  marginBottom: 23%;
`;

export const Buttons = styled.View`
  flexDirection: row;
  borderTopWidth: 1px;
  borderColor: #fff;
`;

export const Btn = styled.TouchableOpacity`
  width: 50%;
  justifyContent: center;
  alignItems: center;
  padding: 4%;
`;

export const TextButton = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(12)}px;
`;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#f17',
    justifyContent: 'center',
  },
});

export default ModalComponent;
