import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import styles from './style';

const CheckCode = ({navigation}) => {
  const [pin, setPin] = useState('');

  const {container, pinContainer, input, button} = styles;

  return (
    <SafeAreaView style={container}>
      <View style={pinContainer}>
        <InputText
          value={pin}
          onChangeText={pinText => setPin(pinText)}
          placeholder="Code PIN"
          style={input}
        />
        <Button text="Vérifier..." style={button} />
      </View>
    </SafeAreaView>
  );
};

export default CheckCode;
