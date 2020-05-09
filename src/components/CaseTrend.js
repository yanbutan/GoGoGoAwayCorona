import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
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
      </View>
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(73, 190, 183, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#49BEB7',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}
