import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './style';

const Home = ({navigation}) => {
  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
