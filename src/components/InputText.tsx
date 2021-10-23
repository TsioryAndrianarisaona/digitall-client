import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

interface InputTextProps extends TextInputProps {
  styles?: any;
}

const InputText = (props: InputTextProps) => {
  return (
    <View style={props.styles}>
      <TextInput {...props} />
    </View>
  );
};

export default InputText;
