import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

const Documents = ({}) => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <Text>Documents</Text>
    </SafeAreaView>
  );
};

export default Documents;
