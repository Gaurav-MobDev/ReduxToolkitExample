import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';

class CButton extends PureComponent {
  render() {
    const {onPress, text, accessibilityLabel, testID} = this.props;
    return (
      <View style={style.buttonContainerStyle}>
        <TouchableOpacity
          accessible={true}
          testID={testID}
          accessibilityLabel={accessibilityLabel}
          style={style.buttonStyle}
          onPress={onPress}>
          <Text numberOfLines={1} style={style.buttonTextStyle}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CButton;
