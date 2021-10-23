import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: any;
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <View>
      <TouchableOpacity {...props} style={[props.style]}>
        <Text style={props.textStyle}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
