import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NewsStyle from 'src/assets/jss/NewsStyle';
import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
const useStyles = StyleSheet.create(NewsStyle);
const styles = useStyles();

export default function LatestNews() {
  return (
    <View style={styles.section}>
      <View style={styles.horizontalContain}>
        <View style={styles.viewLeft}>
          <Text style={styles.titleText}>Latest News</Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={[styles.newsCard, styles.shadow, styles.horizontalContain]}>
          <View>
            <Text style={styles.newsPrimary}>Some News Title</Text>
            <Text style={styles.newsSecondary}>13 May 2019</Text>
          </View>
        </View>
        <View
          style={[styles.newsCard, styles.shadow, styles.horizontalContain]}>
          <View>
            <Text style={styles.newsPrimary}>Some News Title</Text>
            <Text style={styles.newsSecondary}>13 May 2019</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
