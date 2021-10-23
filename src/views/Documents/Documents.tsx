import React, {useEffect, useState} from 'react';
import {FlatList, Modal, SafeAreaView, View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './style';
import Button from '../../components/Button';
import {Colors} from '../../styles/Colors';
import {RadioButton} from 'react-native-paper';

const Documents = ({}) => {
  const [checked, setChecked] = useState([]);
  const [visible, setVisible] = useState(false);
  const [checkedFolder, setCheckedFolder] = useState('');

  const documents = [
    {
      id: 1,
      label: 'Certificat de résidence',
    },
    {
      id: 2,
      label: 'Certificat de vie',
    },
    {
      id: 3,
      label: 'Certificat de célibat',
    },
  ];

  const folders = [
    {
      id: 1,
      label: 'Dossier 1',
    },
    {
      id: 2,
      label: 'Dossier 2',
    },
    {
      id: 3,
      label: 'Dossier 3',
    },
  ];

  const _onCheck = value => {
    if (!checked.includes(value.id)) {
      setChecked(checked.concat(value.id));
    } else {
      setChecked(checked.filter(item => item !== value.id));
    }
  };

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
              title={item.label}
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
                    <Text>{item.label}</Text>
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
                setVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Documents;
