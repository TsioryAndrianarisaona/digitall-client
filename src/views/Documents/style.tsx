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
    padding: normalize(20),
    marginTop: normalize(10),
    marginBottom: normalize(20),
    backgroundColor: Colors.green,
    borderRadius: 20,
  },
  buttonText: {
    alignSelf: 'center',
    color: Colors.white,
  },
});

export default styles;
