import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.green,
    fontWeight: '500',
    fontSize: normalize(25),
    textAlign: 'center',
    marginTop: normalize(45),
  },
  folderContainer: {
    marginTop: normalize(25),
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
    marginTop: normalize(20),
  },
  create: {
    backgroundColor: Colors.green,
    width: normalize(65),
    height: normalize(65),
    marginRight: normalize(30),
    marginBottom: normalize(40),
    borderRadius: normalize(40),
    justifyContent: 'center',
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default styles;
