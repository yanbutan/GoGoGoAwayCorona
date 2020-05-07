import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';

export default function Header({title}) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.text} style={{color: 'darkslateblue'}}>
          Summary
        </Text>
        <Button style={styles.countryBtn} title="Singapore" />
      </View>
    </>
  );
}

Header.defaultProps = {
  title: 'Default Header',
};

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();
