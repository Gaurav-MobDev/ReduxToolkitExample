import React from 'react';
import {View, Text, TextInput} from 'react-native';
import style from './style';
import {Constants} from '../../utilities';
const {testIds} = Constants;

function CInputFieldWithLabel(props) {
  const {
    title,
    testID,
    accessibilityLabel,
    placeHolderText,
    secure,
    value,
    onChangeText,
    onSubmitEditing,
    blurOnSubmit,
  } = props;
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <TextInput
        testID={testID}
        accessible={true}
        accessibilityLabel="Email"
        style={style.input}
        placeholder={placeHolderText}
        secureTextEntry={secure}
        value={value}
        blurOnSubmit={blurOnSubmit}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

export default CInputFieldWithLabel;
