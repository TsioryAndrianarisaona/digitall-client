import {useFocusEffect} from '@react-navigation/core';
import React, {useRef} from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './style';

const Scan = ({navigation}) => {
  const scanner = useRef(null);

  const onSuccess = e => {
    navigation.navigate('CheckCode');
    console.log(e.data);
  };

  useFocusEffect(() => {
    scanner.current.reactivate();
  });

  const {container} = styles;

  return (
    <SafeAreaView style={container}>
      <QRCodeScanner
        ref={scanner}
        onRead={onSuccess}
        showMarker
        fadeIn
        cameraStyle={{height: Dimensions.get('screen').height}}
      />
    </SafeAreaView>
  );
};

export default Scan;
