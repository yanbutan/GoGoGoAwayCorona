import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: 'Default Header',
};

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();
