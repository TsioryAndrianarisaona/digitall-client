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
    fontWeight: '700',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.opacity,
    padding: normalize(20),
  },
  modalContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(20),
    borderRadius: normalize(10),
  },
  modaltitle: {
    fontSize: normalize(18),
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.red,
    fontWeight: '700',
  },
  folderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  folder: {
    marginTop: normalize(20),
  },
  folderButton: {
    padding: normalize(20),
    marginTop: normalize(20),
    backgroundColor: Colors.green,
    borderRadius: 20,
  },
});

export default styles;
