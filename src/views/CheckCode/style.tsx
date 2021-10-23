import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  pinContainer: {
    flexBasis: '25%',
    padding: normalize(20),
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    flexBasis: '45%',
  },
  button: {
    borderWidth: 1,
    padding: normalize(20),
  },
});

export default styles;
