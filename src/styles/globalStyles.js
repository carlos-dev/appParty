import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { scaleFontSize } from '../utils/scaleFontSize';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${(props) => props.theme.background};
  alignItems: center;
`;

export const TitleFrom = styled.Text`
  fontSize: ${scaleFontSize(22)}px;
  marginBottom: 10%;
  color:  ${(props) => props.theme.primary};
`;

export const ViewInput = styled.View`
  position: relative;
  width: 80%;
  justifyContent: center;
  marginBottom: 3%;
`;

export const Input = styled.TextInput`
  width: 100%;
  backgroundColor: ${(props) => props.theme.secondary};
  borderRadius: 8px;
  paddingLeft: 15%;
  height: ${height * 0.07}px;
  fontSize: ${scaleFontSize(13)}px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  backgroundColor: #3399ff;
  borderRadius: 8px;
  height: ${height * 0.07}px;
  justifyContent: center;
  margin: 5% 0 2% 0;
`;

export const TextButton = styled.Text`
  color: #fff; 
  fontSize: ${scaleFontSize(12)}px;
  textAlign: center;
`;

export const TextError = styled.Text`
  color: #fff; 
  fontSize: ${scaleFontSize(12)}px;
`;

export const Footer = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  bottom: 0;
  backgroundColor: ${(props) => props.theme.secondary};
  padding: 4.5% 0;
  alignItems: center;
  justifyContent: center;
  flexDirection: row;
`;

export const TitleFooter = styled.Text`
  fontSize: ${scaleFontSize(12)}px;
  color: ${(props) => props.theme.primary};
  marginLeft: 2%;
`;

export const TitleMain = styled.Text`
  fontSize: ${scaleFontSize(22)}px;
  color: ${(props) => props.theme.primary};
  marginBottom: 4%;
  marginLeft: 1%;
`;

export const Cards = styled.View`
  flex: 1;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width:  ${width * 0.85}px;
  height: ${width * 0.7}px;
  marginRight: 15px;
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justifyContent: flex-end;
`;

export const Info = styled.View`
  backgroundColor: ${(props) => props.theme.secondary};
  height: 35%;
  width: 100%;
  padding: 4% 6% 0 6%;
`;

export const Details = styled.View`
  justifyContent: space-between;
  flexDirection: row;
`;

export const ItemDetails = styled.View`
  marginTop: 1%;
  alignItems: center;
`;

export const TextDetails = styled.Text`
  fontSize: ${scaleFontSize(11)}px;
  color: #827f7e;
`;

export const Number = styled.Text`
  fontSize: ${scaleFontSize(15)}px;
  color: ${(props) => props.theme.primary};
`;

export const Name = styled.Text`
  width: ${width * 0.2}px;
  fontSize: ${scaleFontSize(14)}px;
  color: ${(props) => props.theme.primary};
`;

export const globalStyles = StyleSheet.create({
  iconForm: {
    position: 'absolute',
    zIndex: 1,
    fontSize: scaleFontSize(18),
    paddingLeft: '4.5%',
  },

  iconSearch: {
    fontSize: scaleFontSize(22),
  },
});
