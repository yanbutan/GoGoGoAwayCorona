import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Covid Statistics" />
      <Summary />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEEF5',
  },
});
