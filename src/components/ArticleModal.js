import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import NewsStyle from 'src/assets/jss/NewsStyle';
// import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const useStyles = StyleSheet.create(NewsStyle);
const styles = useStyles();

export default function ArticleModal({article, setOpenModal}) {
  return (
    <View>
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
            <Text style={styles.articleSubtitle}>{`${
              article.author
            }, ${article.publishedAt.slice(0, 10)}`}</Text>
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
          <View>
            <Text style={styles.articleDescrip}>{`"${
              article.description
            }"`}</Text>
          </View>
          <View>
            <Text style={styles.articleContent}>{`${article.content}`}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
