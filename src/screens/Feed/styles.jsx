import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {colors, fonts, sizes} from '../../styles/index';

export const SafeArea = styled.KeyboardAvoidingView({});

export const SafeInputArea = styled.SafeAreaView({
  backgroundColor: colors.white,
});

export const KeyboardArea = styled.TouchableWithoutFeedback({});

export const Container = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.feed,
});

export const FeedMessage = styled.FlatList({
  backgroundColor: colors.feed,
  marginTop: 20,
});

export const InputArea = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.white,
  padding: 5,
});

export const IconArea = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
  width: '10%',
});

export const Input = styled.TextInput({
  height: 40,
  width: '80%',
  paddingHorizontal: 10,
  border: 1,
  borderColor: colors.feed,
});

export const MessageAreaReceived = styled.View({
  maxWidth: '80%',
  height: 'auto',
  padding: 8,
  backgroundColor: colors.white,
  margin: 8,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomRightRadius: 8,
});

export const MessageAreaSent = styled.View({
  maxWidth: '80%',
  height: 'auto',
  padding: 8,
  backgroundColor: colors.backgroundChat,
  margin: 8,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
  alignSelf: 'flex-end',
});

export const MessageText = styled.Text({
  fontSize: sizes.medium,
  fontFamily: fonts.montserrat,
});

export const MessageTime = styled.Text({});

export const EmptyArea = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.feed,
});

export const EmptyText = styled.Text({
  fontFamily: fonts.montserratBold,
  fontSize: sizes.note,
  color: colors.white,
  textAlign: 'center',
  padding: 20,
});

export const LoadingArea = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.feed,
});

export const Loading = styled.ActivityIndicator({});
