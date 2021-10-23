import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

const Folder = ({navigation}) => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <Text>Dossier</Text>
    </SafeAreaView>
  );
};

export default Folder;
