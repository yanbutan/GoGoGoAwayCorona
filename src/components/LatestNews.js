import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import NewsStyle from 'src/assets/jss/NewsStyle';
// import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
const useStyles = StyleSheet.create(NewsStyle);
const styles = useStyles();

export default function LatestNews(props) {
  const {data} = props;
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
            <View style={styles.image}>
              <Image
                source={{
                  uri:
                    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
                }}
              />
            </View>
            <View style={styles.newsSummary}>
              <Text style={styles.newsPrimary}>{`${article.title.slice(
                0,
                25,
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
}
