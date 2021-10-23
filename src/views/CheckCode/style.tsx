import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  pinContainer: {
    flexBasis: '25%',
    padding: normalize(20),
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    flexBasis: '45%',
    borderRadius: 20,
    paddingLeft: normalize(15),
    borderColor: Colors.green,
  },
  button: {
    padding: normalize(20),
    backgroundColor: Colors.green,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default styles;
