import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Header from 'src/components/Header';

export default function SafetyMeasures() {
  return (
    <ScrollView style={styles.container}>
      <Header title={`Safety First Boys & Girls`} />
      <View>
        <Text>Safety Measures</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ECEEF5',
  },
});
