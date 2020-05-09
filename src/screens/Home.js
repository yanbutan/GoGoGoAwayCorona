import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
import CaseTrend from 'src/components/CaseTrend';
import LatestNews from 'src/components/LatestNews';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header title="Covid Statistics" />
      <Summary />
      <CaseTrend />
      <LatestNews />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ECEEF5',
  },
});
