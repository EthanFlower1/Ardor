/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {io} from 'socket.io-client';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import {GiftedChat, InputToolbar} from 'react-native-gifted-chat';
import MsgNav from './components/MsgNav.js';
import Emoji from './components/Emoji.js';

const App = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello 👋',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);
  const [socket, setSocket] = useState(null);
  const [emotion, setEmotion] = useState({});

  useEffect(() => {
    let sock = io('ws://localhost:3000');
    setSocket(sock);
    sock.on('private message', msg => {
      console.log('message im receiving', msg);
      setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
      setEmotion(msg[0].emotion);
    });
  }, []);

  const onSend = msg => {
    socket.emit('private message', msg);
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <MsgNav />
      <Emoji emotion={emotion} />
      <GiftedChat
        messages={messages}
        onSend={msg => onSend(msg)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
};
const customtInputToolbar = props => (
  <InputToolbar {...props} containerStyle={styles.containerStyle} />
);
const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    borderRadius: 25,
  },
});
export default App;


