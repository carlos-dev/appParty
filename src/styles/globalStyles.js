import { Dimensions } from 'react-native'
import styled from 'styled-components/native';
import { scaleFontSize } from '../utils/scaleFontSize';

const { height } = Dimensions.get('window')

export const Container = styled.View`
  flex: 1;
  backgroundColor: #000;
  alignItems: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  backgroundColor: #232129;
  borderRadius: 8px;
  marginBottom: 3%;
  paddingLeft: 8%;
  height: ${height * 0.07}px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  backgroundColor: #3399ff;
  borderRadius: 8px;
  height: ${height * 0.07}px;
  justifyContent: center;
  marginTop: 1%;
`;

export const TextButton = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(12)}px;
  textAlign: center;
`;