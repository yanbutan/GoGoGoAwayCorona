import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CaseTrendStyle from 'src/assets/jss/CaseTrendStyle';
import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
const useStyles = StyleSheet.create(CaseTrendStyle);
const styles = useStyles();

export default function CaseTrend() {
  return (
    <View style={styles.section}>
      <View style={styles.horizontalContain}>
        <View style={styles.viewLeft}>
          <Text style={styles.titleText}>Case Trend</Text>
        </View>
        {/* <View /> */}
      </View>
      <View style={[styles.graphCard, styles.shadow, styles.horizontalContain]}>
        <View>
          <Text style={styles.cardPrimary}>20,000</Text>
          <Text style={styles.cardSecondary}>Confirmed Cases</Text>
        </View>
        <View>
          <MaskWomanSVG width={100} height={90} />
        </View>
      </View>
    </View>
  );
}
