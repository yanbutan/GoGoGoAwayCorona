import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Header from 'src/components/Header';

export default function Help() {
  return (
    <ScrollView style={styles.container}>
      <Header title={`Help`} />
      <View>
        <Text>Help Me Help Me</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ECEEF5',
  },
});
