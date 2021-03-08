import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Platform, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {doLogin} from '../slice';
import {fetchUser} from '../thunk';
import Style from './style';
import CInputField from '../components/CInputField';
import CButton from '../components/CButton';
import {Constants} from '../utilities';
const {testIds, strings} = Constants;

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);

  const login = () => {
    dispatch(doLogin());
    dispatch(fetchUser({email: email, password: password}));
  };
  return (
    <View style={Style.container}>
      <KeyboardAvoidingView
        style={Style.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={Style.keyboardVerticalOffset.top}>
        <View style={Style.innerContainer}>
          <View style={Style.inputContainer}>
            <CInputField
              value={email}
              title={strings.emailPlaceholder}
              accessibilityLabel={testIds.email}
              blurOnSubmit={false}
              placeHolderText={strings.emailPlaceholder}
              onChangeText={(value) => setEmail(value)}
            />
            <CInputField
              value={password}
              title={strings.passwordPlaceholder}
              accessibilityLabel={testIds.password}
              blurOnSubmit={true}
              placeHolderText={strings.passwordPlaceholder}
              onChangeText={(value) => setPassword(value)}
            />
            <Text style={Style.loginDetails}>{userData.email}</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={Style.buttonsContainer}>
        <CButton
          accessibilityLabel={testIds.login}
          text={strings.loginButton}
          textStyle={Style.whiteText}
          onPress={login}
        />
      </View>
    </View>
  );
}
export default SignIn;
