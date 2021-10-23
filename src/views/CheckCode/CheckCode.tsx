import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import ScanAPI from '../../api/ScanAPI';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import styles from './style';

const CheckCode = ({navigation, route}) => {
  const [pin, setPin] = useState('');
  const {qrCode, codeConf} = route.params;

  const checkPINCode = () => {
    const json = {
      qrCode: qrCode,
      code: codeConf,
    };
    new ScanAPI()
      .scanAuthentification(json)
      .then(response => {
        navigation.navigate('TabNavigation', {
          citizen: response.data.citizen,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            checkPINCode();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CheckCode;
