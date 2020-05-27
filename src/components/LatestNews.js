import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import NewsStyle from 'src/assets/jss/NewsStyle';
// import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
const useStyles = StyleSheet.create(NewsStyle);
const styles = useStyles();

export default function LatestNews(props) {
  const {data, loading} = props;

  if (data) {
    return (
      <View style={styles.section}>
        <View style={styles.horizontalContain}>
          <View style={styles.viewLeft}>
            <Text style={styles.titleText}>Latest News</Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {data.map((article, index) => (
            <View key={index} style={[styles.newsCard, styles.shadow]}>
              <View style={styles.image} />
              <View style={styles.newsSummary}>
                <Text style={styles.newsPrimary}>{`${article.title.slice(
                  0,
                  20,
                )}...`}</Text>
                <Text style={styles.newsSecondary}>
                  {article.publishedAt.slice(0, 9)}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  } else return <ActivityIndicator />;
}
