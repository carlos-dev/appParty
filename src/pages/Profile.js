/* eslint-disable import/no-duplicates */
import React, { useState, useEffect } from 'react';
import {
  Dimensions, ScrollView, TouchableOpacity, ActivityIndicator,
} from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from 'react-native-paper';

import IconArrow from 'react-native-vector-icons/AntDesign';
import IconPower from 'react-native-vector-icons/Feather';
import IconCamera from 'react-native-vector-icons/Feather';
import IconUser from 'react-native-vector-icons/Feather';

import SnackbarComponent from '../components/Snackbar';
import ModalComponent from '../components/Modal';

import * as ProfileActions from '../store/actions/profile';
import * as ModalVisibleActions from '../store/actions/modalVisible';
import * as UpdateProfileActions from '../store/actions/updateProfile';
import * as UploadAvatarActions from '../store/actions/uploadAvatar';

import photoExample from '../assets/images/profile.jpg';

import {
  Container, ViewInput, Input, globalStyles,
} from '../styles/globalStyles';
import { scaleFontSize } from '../utils/scaleFontSize';

const { width, height } = Dimensions.get('window');

export default function Profile({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(null);

  const dispatch = useDispatch();
  const { profile, updateProfile } = useSelector((state) => state);

  useEffect(() => {
    dispatch(ProfileActions.profileRequest());
  }, []);

  useEffect(() => {
    if (profile.profileData) {
      setName(profile.profileData.name);

      if (profile.profileData.avatar) {
        setPhoto(profile.profileData.avatar);
      }
    }
  }, [profile]);

  async function takePicture() {
    // const options = {
    //   mediaType: 'photo',
    // };

    const options = {
      title: 'Selecione uma opção',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tirar uma foto',
      chooseFromLibraryButtonTitle: 'Escolher foto da galeria',
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };

        const formData = new FormData();
        formData.append('avatar', {
          uri: response.uri,
          type: 'multipart/form-data',
          name: response.fileName,
        });

        dispatch(UploadAvatarActions.updateAvatarRequest(formData));

        setPhoto(source.uri);
      }
    });
  }

  function updateData() {
    const obj = {
      name,
      bio: null,
    };

    dispatch(UpdateProfileActions.updateProfileRequest(obj));

    if (updateProfile.profileData) {
      if (updateProfile.message === 'Usuário atualizado com sucesso!') {
        setVisible(true);

        // setTimeout(() => {
        //   setVisible(!visible);
        // }, 5000);
      }
    }
  }

  // console.log(visible);
  const onDismissSnackBar = () => setVisible(false);

  return (
    <Container>
      <ModalComponent navigation={navigation} />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ width: '100%' }}>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconArrow name="arrowleft" size={scaleFontSize(20)} color="#fff" />
          </TouchableOpacity>

          <TextHeader>Meu Perfil</TextHeader>

          <TouchableOpacity onPress={() => dispatch(ModalVisibleActions.modalVisible(true))}>
            <IconPower name="power" size={scaleFontSize(20)} color="#fff" />
          </TouchableOpacity>
        </Header>

        {profile.loading || profile.error ? (
          <ContainerLoading>
            <ActivityIndicator color="#777" size="large" />
          </ContainerLoading>
        ) : (
          <>
            <WrapperPhoto>
              {photo ? (
                <Photo source={{ uri: photo }} />
              ) : (
                <Photo source={photoExample} />
              )}

              <BtnPhoto activeOpacity={0.7} onPress={takePicture}>
                <IconCamera name="camera" size={scaleFontSize(20)} color="#fff" />
              </BtnPhoto>

            </WrapperPhoto>

            <Form>
              <Inputs>
                <ViewInput>
                  <IconUser name="user" color="#666360" style={globalStyles.iconForm} />
                  <Input
                    placeholder="Nome"
                    placeholderTextColor="#535466"
                    value={name}
                    onChangeText={(text) => setName(text)}
                  />
                </ViewInput>
              </Inputs>

              <BtnConfirm onPress={updateData}>
                <TextButton>Salvar</TextButton>
                {updateProfile.loading && <ActivityIndicator style={{ marginLeft: '3%' }} color="#fff" size="small" />}
              </BtnConfirm>
            </Form>
          </>
        )}

      </ScrollView>

      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ backgroundColor: '#088710' }}
        action={{
          label: '',
          onPress: () => {
            // Do something
          },
        }}
      >
        Dados atualizados com sucesso
      </Snackbar>

      <SnackbarComponent />
    </Container>
  );
}

export const Header = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  width: 90%;
  height: 12%;
  alignItems: center;
`;

export const TextHeader = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(20)}px;
`;

export const WrapperPhoto = styled.View`
  backgroundColor: #2d5bc3;
  borderRadius: 200px;
  padding: 3%;
  position: relative;
  marginBottom: 5%;
`;

export const Photo = styled.Image`
  width: ${width * 0.5}px;
  height: ${width * 0.5}px;
  borderRadius: 100px;
`;

export const Form = styled.View`
  width: 100%;
  alignItems: center;
  justifyContent: space-between;
  paddingBottom: 35%;
`;

export const Inputs = styled.View`
  width: 100%;
  alignItems: center;
`;

export const BtnPhoto = styled.TouchableOpacity`
  backgroundColor: #3897ff;
  borderRadius: 100px;
  position: absolute;
  padding: 5%;
  alignItems: center;
  justifyContent: center;
  bottom: 0;
  right: 0;
`;

export const BtnConfirm = styled.TouchableOpacity`
  width: 80%;
  height: ${height * 0.07}px;
  backgroundColor: #2870d4;
  borderRadius: 8px;
  justifyContent: center;
  alignItems: center;
  flexDirection: row;
`;

export const TextButton = styled.Text`
  color: #fff;
  fontSize: ${scaleFontSize(13)}px;
`;

export const ContainerLoading = styled.View`
  width:  100%;
  height: 100%;
  justifyContent: center;
  alignItems: center;
`;
