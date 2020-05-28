import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

export default function Summary(props) {
  const {data} = props;

  // if (data) {
  return (
    <>
      <View style={[styles.horizontalContain, {marginRight: 6, marginLeft: 6}]}>
        <View style={[styles.card, styles.shadow, styles.death]}>
          <View>
            <Text style={[styles.cardPrimary, {color: '#F98C62'}]}>
              {data.cases}
            </Text>
            <Text style={[styles.cardSecondary, {color: '#FBB192'}]}>
              Confirmed Cases
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.shadow, styles.death]}>
          <View>
            <Text style={[styles.cardPrimary, {color: '#A3003F'}]}>
              {data.deaths}
            </Text>
            <Text style={[styles.cardSecondary, {color: '#FF5959'}]}>
              Deaths
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.horizontalContain, {marginRight: 6, marginLeft: 6}]}>
        <View style={[styles.card, styles.shadow, styles.recovered]}>
          <View>
            <Text style={styles.cardPrimary}>{data.recovered}</Text>
            <Text style={styles.cardSecondary}>Recovered</Text>
          </View>
          <View />
        </View>
        <View style={[styles.card, styles.shadow]}>
          <View>
            <Text style={[styles.cardPrimary, {color: '#2D31AC'}]}>
              {data.active}
            </Text>
            <Text style={[styles.cardSecondary, {color: '#6587DE'}]}>
              Active
            </Text>
          </View>
          <View />
        </View>
      </View>
    </>
  );
}
