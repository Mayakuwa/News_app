import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default ClipScreen = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <Text>Hello Screen!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
