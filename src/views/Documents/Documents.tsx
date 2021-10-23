import React, {useEffect, useState} from 'react';
import {FlatList, Modal, SafeAreaView, View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './style';
import Button from '../../components/Button';
import {Colors} from '../../styles/Colors';
import {RadioButton} from 'react-native-paper';
import InformationAPI from '../../api/InformationAPI';
import FolderAPI from '../../api/FolderAPI';

const Documents = ({navigation, route}) => {
  const [documents, setDocuments] = useState([]);
  const [folders, setFolders] = useState([]);
  const [checked, setChecked] = useState([]);
  const [visible, setVisible] = useState(false);
  const [checkedFolder, setCheckedFolder] = useState('');

  const {idMenu, idCitizen} = route.params;

  const getDocuments = () => {
    new InformationAPI()
      .getMenuDetails(idMenu)
      .then(response => {
        setDocuments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getFolders = () => {
    new FolderAPI()
      .getFolders(idCitizen)
      .then(response => {
        setFolders(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const createDocuments = () => {
    const json = {
      folder: Number.parseInt(checkedFolder),
      document: checked,
    };
    new FolderAPI()
      .createDocumentInFolder(json)
      .then(response => {
        setVisible(false);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const _onCheck = value => {
    if (!checked.includes(value.id)) {
      setChecked(checked.concat(value.id));
    } else {
      setChecked(checked.filter(item => item !== value.id));
    }
  };

  useEffect(() => {
    getDocuments();
    getFolders();
  }, [idMenu]);

  const {
    container,
    button,
    buttonText,
    background,
    modalContainer,
    modaltitle,
    folderContainer,
    folder,
    folderButton,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <FlatList
        data={documents}
        renderItem={({item, index}) => {
          return (
            <CheckBox
              title={item.name}
              checked={checked.includes(item.id) ? true : false}
              onPress={() => _onCheck(item)}
              checkedColor={Colors.green}
            />
          );
        }}
      />
      <Button
        text="Envoyer la demander"
        style={button}
        textStyle={buttonText}
        onPress={() => setVisible(true)}
      />
      <Modal visible={visible} onDismiss={() => setVisible(false)} transparent>
        <View style={background}>
          <View style={modalContainer}>
            <Text style={modaltitle}>Séléctionner un dossier</Text>
            <FlatList
              data={folders}
              renderItem={({item, index}) => {
                return (
                  <View style={folderContainer}>
                    <RadioButton
                      value={checkedFolder}
                      status={
                        checkedFolder === item.id.toString()
                          ? 'checked'
                          : 'unchecked'
                      }
                      onPress={() => setCheckedFolder(item.id.toString())}
                      color={Colors.green}
                    />
                    <Text>{item.name}</Text>
                  </View>
                );
              }}
              style={folder}
            />
            <Button
              text="Enregistrer"
              style={folderButton}
              textStyle={buttonText}
              onPress={() => {
                createDocuments();
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Documents;
