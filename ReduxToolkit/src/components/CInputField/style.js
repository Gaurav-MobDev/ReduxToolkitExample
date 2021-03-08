import {StyleSheet} from 'react-native';
import {Colors} from '../../utilities';

const {COLOR_CODES} = Colors;
const Style = StyleSheet.create({
  container: {
    height: 'auto',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLOR_CODES.LIGHT_GRAY,
    marginTop: 24,
  },
  input: {
    marginTop: 16,
    paddingLeft: 19,
    color: COLOR_CODES.BLACK,
    paddingRight: 19,
    lineHeight: 20,
    fontSize: 18,
    width: '100%',
    fontWeight: '500',
    height: 50,
    borderColor: COLOR_CODES.GRAY,
    borderWidth: 2,
    borderRadius: 4,
  },
  title: {
    marginTop: 24,
    fontSize: 14,
    color: COLOR_CODES.BLACK,
  },
});

export default Style;
