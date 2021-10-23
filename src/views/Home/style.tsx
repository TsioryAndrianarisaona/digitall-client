import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  code: {
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  cardContainer: {
    paddingTop: normalize(30),
  },
  card: {
    flexBasis: '45%',
    paddingTop: normalize(40),
    paddingBottom: normalize(40),
    backgroundColor: Colors.green,
    borderRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.white,
  },
  icon: {
    marginTop: normalize(20),
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
    marginTop: normalize(10),
  },
});

export default styles;
