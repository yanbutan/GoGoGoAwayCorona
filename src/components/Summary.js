import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import millify from 'millify';

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

export default function Summary(props) {
  const {data} = props;
  const option = {
    commafy: true,
    shortFormat: true,
    // shortFormatMinValue: 10000,
    title: true,
  };

  // if (data) {
  return (
    <>
      <View style={[styles.horizontalContain, {marginRight: 6, marginLeft: 6}]}>
        <View style={[styles.card, styles.shadow, styles.death]}>
          <View>
            <Text style={[styles.cardPrimary, {color: '#F98C62'}]}>
              {millify(parseInt(data.cases, 10))}
            </Text>

            <Text style={[styles.cardSecondary, {color: '#FBB192'}]}>
              Confirmed Cases
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.shadow, styles.death]}>
          <View>
            <Text style={[styles.cardPrimary, {color: '#2D31AC'}]}>
              {data.todayCases}
            </Text>
            <Text style={[styles.cardSecondary, {color: '#6587DE'}]}>
              Cases Today
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
            <Text style={[styles.cardPrimary, {color: '#A3003F'}]}>
              {data.deaths}
            </Text>
            <Text style={[styles.cardSecondary, {color: '#FF5959'}]}>
              Deaths
            </Text>
          </View>
          <View />
        </View>
      </View>
    </>
  );
}
