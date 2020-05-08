import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Covid Statistics" />
      <Summary />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEEF5',
  },
});
