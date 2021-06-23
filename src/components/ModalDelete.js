import React from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { scaleFontSize } from '../utils/scaleFontSize';

import * as ModalDeleteActions from '../store/actions/modalDelete';
import * as DeleteActions from '../store/actions/delete';

function ModalDelete({ navigation }) {
  const dispatch = useDispatch();
  const { modalDelete } = useSelector((state) => state);

  function deleteAccount() {
    dispatch(DeleteActions.deleteRequest());

    setTimeout(() => {
      AsyncStorage.removeItem('token');
      navigation.navigate('Login');
      dispatch(ModalDeleteActions.modalDelete(false));
    }, 1000);
  }

  return (
    <Modal
      animationType="fade"
      transparent
      visible={modalDelete.modalDelete}
    >
      <ViewModal>
        <Box>
          {modalDelete.loading && (
            <Loading>
              <ActivityIndicator color="#777" size="large" />
            </Loading>
          )}
          <Title>Tem certeza que deseja excluir sua conta?</Title>
          <Buttons>
            <Btn onPress={deleteAccount}>
              <TextButton>Sim</TextButton>
            </Btn>

            <Btn onPress={() => dispatch(ModalDeleteActions.modalDelete(false))}>
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
  backgroundColor: ${(props) => props.theme.secondary};
  justifyContent: flex-end;
  alignItems: center;
  borderRadius: 10px;
  width: 70%;
  height: 25%;
  position: relative;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.primary};
  fontSize: ${scaleFontSize(14)}px;
  width: 90%;
  textAlign: center;
  marginBottom: 23%;
`;

export const Buttons = styled.View`
  flexDirection: row;
  borderTopWidth: 1px;
  borderColor: ${(props) => props.theme.primary};
`;

export const Btn = styled.TouchableOpacity`
  width: 50%;
  justifyContent: center;
  alignItems: center;
  padding: 4%;
`;

export const Loading = styled.View`
  width: 100%;
  height: 100%;
  backgroundColor: rgba(0, 0, 0, 0.6);
  justifyContent: center;
  alignItems: center;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.theme.primary};
  fontSize: ${scaleFontSize(12)}px;
`;

export default ModalDelete;
