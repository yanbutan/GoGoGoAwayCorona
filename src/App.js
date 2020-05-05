import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Covid Statistics" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
