import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Linking,
} from 'react-native';
import NewsStyle from 'src/assets/jss/NewsStyle';
// import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const useStyles = StyleSheet.create(NewsStyle);
const styles = useStyles();

export default function ArticleModal({article, setOpenModal}) {
  return (
    <View style={{paddingBottom: 20}}>
      <View style={(styles.horizontalContain, {backgroundColor: '#ECEEF5'})}>
        <TouchableOpacity onPress={() => setOpenModal(false)}>
          <Icon name="arrow-left" color="#49BEB7" style={styles.iconGrp} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.section}>
          <View>
            <Text style={styles.articleTitle}>{article.title}</Text>
          </View>
          <View>
            <Text style={styles.articleSubtitle}>{`${article.author}, ${
              article.publishedAt
            }`}</Text>
          </View>
          <View style={styles.articlePicture}>
            <Image
              source={{
                uri: article.urlToImage,
              }}
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: 'cover',
              }}
            />
          </View>
          <View style={styles.articleDescripContain}>
            {article.description.map(para => (
              <>
                <Text style={styles.articleDescripText}>{para}</Text>
              </>
            ))}
          </View>
          <View style={styles.articleContentContain}>
            {article.content.map(para => (
              <>
                <Text style={styles.articleContentText}>{para}</Text>
              </>
            ))}
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(article.url)}>
            <View style={styles.readMoreContain}>
              <Text style={styles.readMoreText}>Read Full Story</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
