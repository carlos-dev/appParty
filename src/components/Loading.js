import React from 'react';
import { ActivityIndicator, Modal } from 'react-native';
import styled from 'styled-components/native';

export default function Loading() {
  return (
    <Modal visible transparent>
      <Container>
        <ActivityIndicator color="#777" size="large" />
      </Container>
    </Modal>
  );
}

export const Container = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backgroundColor: rgba(0, 0, 0, 0.6);
  justifyContent: center;
  alignItems: center;
`;
