import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Modal} from 'react-native-paper';
import FolderAPI from '../../api/FolderAPI';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import {Colors} from '../../styles/Colors';
import styles from './style';

const Folder = ({route}) => {
  const [newFolderVisible, setNewFolderVisible] = useState(false);
  const [documentListVisible, setDocumentListVisible] = useState(false);
  const [folders, setFolders] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [newFolder, setNewFolder] = useState('');

  const citizen = route.params;

  const getFolders = () => {
    new FolderAPI()
      .getFolders(citizen.id)
      .then(response => {
        setFolders(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createFolder = () => {
    const json = {name: newFolder, citizen: citizen.id};
    new FolderAPI()
      .createFolder(json)
      .then(response => {
        setFolders(folders.concat(response.data[response.data.length - 1]));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getDocumentsByFolder = (idFolder: string) => {
    new FolderAPI()
      .getDocumentsByFolder(idFolder)
      .then(response => {
        setDocuments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFolders();
  }, []);

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
        data={folders}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                getDocumentsByFolder(item.id);
                setDocumentListVisible(true);
              }}>
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
                createFolder();
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
                    <Text style={documentLabel}>{item.name}</Text>
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
