import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {CheckBox} from 'react-native-elements';
import styles from './style';
import Button from '../../components/Button';

const Documents = ({}) => {
  const [checked, setChecked] = useState([]);

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

  const _onCheck = value => {
    if (!checked.includes(value.id)) {
      setChecked(checked.concat(value.id));
    } else {
      setChecked(checked.filter(item => item !== value.id));
    }
  };

  const {container, button, buttonText} = styles;

  useEffect(() => {}, []);

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
            />
          );
        }}
      />
      <Button
        text="Envoyer la demander"
        style={button}
        textStyle={buttonText}
      />
    </SafeAreaView>
  );
};

export default Documents;
