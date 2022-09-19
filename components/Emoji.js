import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';

const Emoji = ({emotion}) => {
  const [emote, setEmote] = useState('Excited');
  const emojis = {
    Angry: '😡',
    Sad: '😞',
    Fear: '😱',
    Happy: '😀',
    Excited: '🤩',
    Bored: '🥱',
  };
  useMemo(() => {
    let max = 'Happy';
    for (var key in emotion) {
      if (emotion[key] > emotion[max]) {
        max = key;
      }
    }
    setEmote(max);
  }, [emotion]);

  return (
    <View>
      <Text style={styles.emoji}>{emojis[emote]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emoji: {
    textAlign: 'center',
    fontSize: 120,
  },
});

export default Emoji;
