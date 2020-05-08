import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
import CaseTrend from 'src/components/CaseTrend';
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Covid Statistics" />
      <Summary />
      <CaseTrend />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECEEF5',
  },
});
