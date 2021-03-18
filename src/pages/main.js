import React from 'react'
import { Dimensions, FlatList, StyleSheet, View, Text } from 'react-native'
import styled from 'styled-components/native'

import MenuHamburger from '../components/MenuHamburger';

import { scaleFontSize } from '../utils/scaleFontSize';

import logo from '../assets/images/login_03.png'
import party from '../assets/images/party.jpg'

import { 
  Container, 
  Header,
  TitleMain
} from '../styles/globalStyles'

const { width } = Dimensions.get('window')

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item() {
  return (
    <Cards>
      <Card>
        <Background source={party}>
          <Info>
            <Name>Color Fest</Name>


          </Info>
        </Background>
      </Card>
    </Cards>
  )
}

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

export default function Main({navigation}) {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return(
    <Container>
      <Header>
        <Logo source={logo} resizeMode='contain' />
        <MenuHamburger />
      </Header>

      <Wrapper>
        <TitleMain>Festas badaladas</TitleMain>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: '100%'}}
          horizontal
        />
      </Wrapper>
     
      <Wrapper>
        <TitleMain>Acontecendo agora</TitleMain>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: '100%'}}
          horizontal
        />
      </Wrapper>
      
      <Wrapper>
        <TitleMain>Nas próximas horas</TitleMain>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{width: '100%'}}
          horizontal
        />
      </Wrapper>
    </Container>
  )
}

export const Logo = styled.Image`
  width: ${width * 0.3}px;
  height: ${width * 0.1}px;
`;

export const Wrapper = styled.View`
  alignItems: flex-start;
  width: 96%;
  paddingTop: 15%;
`;

export const Cards = styled.View`
  flex: 1;
  width: 100%;
`;

export const Card = styled.TouchableOpacity`
  width:  ${width * 0.85}px;
  height: ${width * 0.7}px;
  marginRight: 15;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justifyContent: flex-end;
`;

export const Info = styled.View`
  backgroundColor: #3e3b47;
  height: 35%;
  width: 100%;
  padding: 4% 6% 0 6%;
`;

export const Name = styled.Text`
  fontSize: ${scaleFontSize(18)}px;
  color: #fff;
`;