import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from './styles';

import { Message } from '../../types';

export type ChatMessageProps = {
  message: Message
  currentUserId: string
};

const ChatMessage = (props: ChatMessageProps) => {
  const { message, currentUserId } = props;

  const isMyMessage = () => {
    return message.user.id === currentUserId;
  };

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
        { !isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }
        <Text>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;