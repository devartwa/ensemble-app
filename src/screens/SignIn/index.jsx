import React, {useState, useRef} from 'react';
import {
  SafeArea,
  ButtonText,
  ButtonView,
  SignInArea,
  SignInText,
  SignUpText,
  SignUpArea,
  Input,
  InputArea,
  ForgotArea,
  ForgotPasswordText,
  KeyboardArea,
  Container,
} from './styles';
import {Platform, Keyboard, Alert, ActivityIndicator} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import Background from '../../assets/images/bg.png';
import {colors} from '../../styles/index';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const passwordInput = useRef();
  const navigation = useNavigation();
  const [username, setUsername] = useState('test4');
  const [password, setPassword] = useState('01575259');
  const [loading, setLoading] = useState(false);

  const userSignIn = async () => {
    setLoading(true);
    if (username.trim() && !!password.trim()) {
      let result = await api.login(username, password);
      if (result.authToken) {
        await AsyncStorage.setItem('@ensemble:token', result.authToken);
        setLoading(false);
        navigation.reset({
          index: 1,
          routes: [{name: 'Feed'}],
        });
      } else {
        setLoading(false);
        switch (result.error.code) {
          case 'NOT_AUTHORIZED':
            Alert.alert(
              'Ops, tivemos um problema:',
              'Os dados fornecidos não existem no nosso sistema, por favor, tente novamente!',
            );
            break;
          default:
            Alert.alert(
              'Ops, tivemos um problema:',
              'Por favor, tente novamente!',
            );
            break;
        }
      }
    } else {
      setLoading(false);
      Alert.alert(
        'Ops, tivemos um problema:',
        'Por favor, preencha os campos ao tentar entrar!',
      );
    }
  };

  return (
    <SafeArea behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
      <KeyboardArea onPress={Keyboard.dismiss}>
        <Container resizeMode="cover" source={Background}>
          <Logo style={{alignSelf: 'center'}} />
          <SignInArea>
            <SignInText>SignIn</SignInText>
            <SignUpArea>
              <SignUpText>SignUp</SignUpText>
            </SignUpArea>
          </SignInArea>
          <InputArea>
            <Input
              placeholder={'Your username'}
              placeholderTextColor={colors.text}
              autoCapitalize="none"
              returnKeyType="next"
              autoCorrect={false}
              onSubmitEditing={() => passwordInput.current.focus()}
              blurOnSubmit={false}
              onChangeText={i => setUsername(i)}
            />
            <Input
              placeholder={'Your password'}
              placeholderTextColor={colors.text}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="go"
              ref={passwordInput}
              onChangeText={i => setPassword(i)}
            />
          </InputArea>
          <ForgotArea>
            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
          </ForgotArea>
          <ButtonView onPress={userSignIn}>
            {loading ? (
              <ActivityIndicator size="small" color={colors.white} />
            ) : (
              <ButtonText>Login</ButtonText>
            )}
          </ButtonView>
        </Container>
      </KeyboardArea>
    </SafeArea>
  );
};

export default SignIn;
