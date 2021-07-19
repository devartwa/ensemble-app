import React, {useEffect, useState} from 'react';
import {
  SafeArea,
  KeyboardArea,
  Container,
  InputArea,
  SafeInputArea,
  Input,
  FeedMessage,
  MessageAreaReceived,
  MessageAreaSent,
  MessageText,
  MessageTime,
  IconArea,
  EmptyArea,
  EmptyText,
  LoadingArea,
  Loading,
} from './styles';
import {Platform, Keyboard} from 'react-native';
import api from '../../services/api';
import {colors} from '../../styles/index';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const Feed = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      _loadFeed();
    }, 5000);

    _loadFeed();
    interval;
  }, []);

  const _renderItem = ({item, index}) => {
    return (
      <>
        {item.user === 'test4' ? (
          <MessageAreaSent key={index}>
            <MessageText>{item.message}</MessageText>
            <MessageTime>
              {item.user} - {moment(item.date).format('DD/MM/YYYY HH:mm:ss')}
            </MessageTime>
          </MessageAreaSent>
        ) : (
          <MessageAreaReceived key={index}>
            <MessageText>{item.message}</MessageText>
            <MessageTime>
              {item.user} - {moment(item.date).format('DD/MM/YYYY HH:mm:ss')}
            </MessageTime>
          </MessageAreaReceived>
        )}
      </>
    );
  };

  const _loadFeed = async () => {
    let result = await api.feed();
    if (result) {
      setLoading(false);
      setData(result.posts);
    }
  };

  const _sendMessage = async () => {
    let result = await api.sendMessage(message);
    if (result) {
      setMessage('');
      _loadFeed();
    }
  };

  const _userLogout = () => {
    navigation.reset({
      index: 1,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <>
      {loading ? (
        <LoadingArea>
          <Loading size="small" color={colors.green} />
        </LoadingArea>
      ) : (
        <>
          {data === null || data.length === 0 ? (
            <EmptyArea>
              <EmptyText>Você não possui mensagens a serem exibidas.</EmptyText>
            </EmptyArea>
          ) : (
            <>
              <Container>
                <FeedMessage
                  data={data}
                  renderItem={_renderItem}
                  keyExtractor={item => item.seq}
                />
              </Container>
              <SafeArea
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled>
                <KeyboardArea onPress={Keyboard.dismiss}>
                  <SafeInputArea>
                    <InputArea>
                      <IconArea onPress={_userLogout}>
                        <Icon size={24} name="sign-out" color={colors.text} />
                      </IconArea>
                      <Input
                        onChangeText={i => setMessage(i)}
                        value={message}
                        numberOfLines={6}
                      />
                      <IconArea onPress={_sendMessage}>
                        <Icon size={24} name="send" color={colors.text} />
                      </IconArea>
                    </InputArea>
                  </SafeInputArea>
                </KeyboardArea>
              </SafeArea>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Feed;
