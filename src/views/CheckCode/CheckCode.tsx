import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import styles from './style';

const CheckCode = ({navigation}) => {
  const [pin, setPin] = useState('');

  const {container, pinContainer, input, button, buttonText} = styles;

  return (
    <SafeAreaView style={container}>
      <View style={pinContainer}>
        <InputText
          value={pin}
          onChangeText={pinText => setPin(pinText)}
          placeholder="Code PIN"
          style={input}
          keyboardType="number-pad"
        />
        <Button
          text="Vérifier"
          style={button}
          textStyle={buttonText}
          onPress={() => {
            navigation.navigate('TabNavigation');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckCode;
