import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: normalize(15),
  },
  button: {
    borderWidth: 1,
    padding: normalize(20),
    marginTop: normalize(10),
  },
  buttonText: {
    alignSelf: 'center',
  },
});

export default styles;
