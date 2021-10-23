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
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(20),
    marginHorizontal: normalize(20),
    borderRadius: normalize(10),
  },
  modaltitle: {
    fontSize: normalize(18),
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.red,
  },
  input: {
    borderWidth: 1,
    flexBasis: '45%',
    borderRadius: 20,
    paddingLeft: normalize(15),
    borderColor: Colors.green,
    marginTop: normalize(20),
  },
  button: {
    padding: normalize(20),
    marginTop: normalize(20),
    backgroundColor: Colors.green,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
  documentContainer: {
    marginTop: normalize(10),
  },
  document: {
    marginTop: normalize(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  documentLabel: {
    flex: 1,
    paddingLeft: normalize(20),
  },
  documentStatus: {
    height: normalize(20),
    width: normalize(20),
    borderRadius: 50,
  },
});

export default styles;
