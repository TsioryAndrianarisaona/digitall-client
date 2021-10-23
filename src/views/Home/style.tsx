import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/Colors';
import {normalize} from '../../tools/Tools';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  cardContainer: {
    paddingTop: normalize(20),
  },
  card: {
    borderWidth: 1,
    flexBasis: '45%',
    paddingTop: normalize(40),
    paddingBottom: normalize(40),
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
  },
  icon: {
    marginTop: normalize(20),
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
  },
});

export default styles;
