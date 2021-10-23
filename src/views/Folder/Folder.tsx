import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Modal} from 'react-native-paper';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import {Colors} from '../../styles/Colors';
import styles from './style';

const Folder = ({}) => {
  const [newFolderVisible, setNewFolderVisible] = useState(false);
  const [documentListVisible, setDocumentListVisible] = useState(false);
  const [newFolder, setNewFolder] = useState('');

  const cardItem: any[] = [
    {
      id: 1,
      name: 'Dossier 1',
      iconName: 'home',
      iconType: 'entypo',
    },
    {
      id: 2,
      name: 'Dossier 2',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 3,
      name: 'Dossier 3',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 4,
      name: 'Dossier 4',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 5,
      name: 'Dossier 5',
      iconName: 'home',
      iconType: 'feather',
    },
    {
      id: 6,
      name: 'Dossier 6',
      iconName: 'home',
      iconType: 'feather',
    },
  ];

  const documents = [
    {
      id: 1,
      label: 'Certificat de résidence',
      status: 0,
    },
    {
      id: 2,
      label: 'Certificat de vie',
      status: 1,
    },
    {
      id: 3,
      label: 'Certificat de célibat',
      status: 2,
    },
  ];

  const {
    container,
    title,
    folderContainer,
    columnWrapper,
    create,
    background,
    modalContainer,
    modaltitle,
    input,
    button,
    buttonText,
    documentContainer,
    document,
    documentLabel,
    documentStatus,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={title}>Mes documents</Text>
      </View>
      <FlatList
        data={cardItem}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setDocumentListVisible(true)}>
              <Icon
                name="folder"
                type="entypo"
                color="#4B5E5E"
                size={50}
                tvParallaxProperties={undefined}
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={columnWrapper}
        style={folderContainer}
      />
      {!newFolderVisible && !documentListVisible && (
        <TouchableOpacity
          style={create}
          onPress={() => setNewFolderVisible(true)}>
          <Icon
            name="plus"
            type="antdesign"
            color={Colors.white}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
      )}
      <Modal
        visible={newFolderVisible}
        onDismiss={() => setNewFolderVisible(false)}>
        <View style={background}>
          <View style={modalContainer}>
            <Text style={modaltitle}>Créer un nouveau dossier</Text>
            <InputText
              value={newFolder}
              onChangeText={newFolderText => setNewFolder(newFolderText)}
              placeholder="Nouveau dossier"
              style={input}
            />
            <Button
              text="Créer"
              style={button}
              textStyle={buttonText}
              onPress={() => {
                setNewFolderVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        visible={documentListVisible}
        onDismiss={() => setDocumentListVisible(false)}>
        <View style={background}>
          <View style={modalContainer}>
            <Text style={modaltitle}>Vos documents</Text>
            <FlatList
              data={documents}
              renderItem={({item, index}) => {
                return (
                  <View style={document}>
                    <View
                      style={[
                        documentStatus,
                        item.status === 0
                          ? {backgroundColor: Colors.green}
                          : item.status === 1
                          ? {backgroundColor: Colors.red}
                          : {backgroundColor: Colors.orange},
                      ]}></View>
                    <Text style={documentLabel}>{item.label}</Text>
                  </View>
                );
              }}
              style={documentContainer}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Folder;
