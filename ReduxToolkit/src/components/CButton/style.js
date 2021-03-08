import {StyleSheet, Platform} from 'react-native';
import {Layout, Colors} from '../../utilities';
const {LAYOUT_CONSTRAINTS} = Layout;
const {COLOR_CODES} = Colors;
const style = StyleSheet.create({
  buttonStyle: {
    borderRadius: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: LAYOUT_CONSTRAINTS.SCREEN_WIDTH - 48,
    backgroundColor: COLOR_CODES.BLACK,
  },
  buttonTextStyle: {
    fontSize: 17,
    textAlign: 'center',
    height: Platform.OS === 'ios' ? 24 : 28,
    color: COLOR_CODES.WHITE,
  },
  buttonContainerStyle: {
    shadowColor: COLOR_CODES.GRAY,
    width: LAYOUT_CONSTRAINTS.SCREEN_WIDTH - 48,
    shadowOpacity: 0.75,
    shadowRadius: 4,
    shadowOffset: {height: 8, width: 0},
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 4,
  },
});
export default style;
