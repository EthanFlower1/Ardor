import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MsgNav = () => {
  return (
    <View style={styles.container}>
      <Text>◀︎</Text>
      <Text>Ethan Flower</Text>
      <Text>⚙</Text>
    </View>
  );
};

export default MsgNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#218aff',
    justifyContent: 'space-between',
    padding: 8,
  },
});
