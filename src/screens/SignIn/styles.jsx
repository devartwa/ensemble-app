import styled from 'styled-components/native';
import {colors, fonts, sizes} from '../../styles/index';

export const SafeArea = styled.KeyboardAvoidingView({
  flex: 1,
});

export const KeyboardArea = styled.TouchableWithoutFeedback({});

export const Container = styled.ImageBackground({
  flex: 1,
  justifyContent: 'center',
});

export const SignInArea = styled.View({
  alignSelf: 'center',
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'baseline',
});

export const SignInText = styled.Text({
  fontSize: sizes.title,
  fontFamily: fonts.montserrat,
  color: colors.green,
});

export const InputArea = styled.View({
  marginTop: 11,
  marginBottom: 12,
});

export const Input = styled.TextInput({
  width: '90%',
  alignSelf: 'center',
  height: 40,
  borderRadius: 4,
  backgroundColor: colors.white,
  paddingHorizontal: 10,
  fontFamily: fonts.montserrat,
  fontSize: sizes.input,
  color: colors.text,
  marginTop: 29,
});

export const SignUpArea = styled.TouchableOpacity({});

export const SignUpText = styled.Text({
  fontSize: sizes.input,
  fontFamily: fonts.montserratBold,
  color: colors.green,
  textDecorationLine: 'underline',
});

export const ButtonView = styled.TouchableOpacity({
  backgroundColor: colors.greenBold,
  width: 160,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  borderRadius: 40,
  height: 40,
  marginTop: 40,
});

export const ButtonText = styled.Text({
  fontSize: sizes.medium,
  fontFamily: fonts.montserrat,
  fontWeight: 500,
  color: colors.white,
});

export const ForgotArea = styled.TouchableOpacity({
  width: '90%',
  alignSelf: 'center',
});

export const ForgotPasswordText = styled.Text({
  fontSize: sizes.input,
  fontFamily: fonts.montserratBold,
  color: colors.green,
  textDecorationLine: 'underline',
  alignSelf: 'flex-end',
});
