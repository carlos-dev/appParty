/* eslint-disable prettier/prettier */
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { scaleFontSize } from '../utils/scaleFontSize';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  backgroundColor: #000;
  alignItems: center;
`;

export const TitleFrom = styled.Text`
  fontSize: ${scaleFontSize(22)}px;
  marginBottom: 10%;
  color: #fff;
`;

export const ViewInput = styled.View`
  position: relative;
  width: 80%;
  justifyContent: center;
  marginBottom: 3%;
`;

export const Input = styled.TextInput`
  width: 100%;
  backgroundColor: #232129;
  borderRadius: 8px;
  paddingLeft: 15%;
  height: ${height * 0.07}px;
  fontSize: ${scaleFontSize(13)}px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  backgroundColor: #3399ff;
  borderRadius: 8px;
  height: ${height * 0.07}px;
  justifyContent: center;
  margin: 5% 0 25% 0;
`;

export const TextButton = styled.Text`
  color: #fff; 
  fontSize: ${scaleFontSize(12)}px;
  textAlign: center;
`;

export const Footer = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  bottom: 0;
  backgroundColor: #333;
  padding: 4.5% 0;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
`;

export const TitleFooter = styled.Text`
  fontSize: ${scaleFontSize(12)}px;
  color: #fff;
  marginLeft: 2%;
`;

export const TitleMain = styled.Text`
  fontSize: ${scaleFontSize(22)}px;
  color: #fff;
  marginBottom: 4%;
`;

export const styles = StyleSheet.create({
  iconForm: {
    position: 'absolute',
    zIndex: 1,
    fontSize: scaleFontSize(18),
    paddingLeft: '4.5%',
  },
});
