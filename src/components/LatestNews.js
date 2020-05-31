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

export default function LatestNews(props) {
  const {data} = props;
  const [openModal, setOpenModal] = useState(false);
  const [article, setArticle] = useState(null);

  const viewArticle = article => {
    setArticle(article);
    setOpenModal(true);
  };

  return (
    <View style={styles.section}>
      <View style={styles.horizontalContain}>
        <View style={styles.viewLeft}>
          <Text style={styles.titleText}>Latest News</Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((article, index) => (
          <TouchableOpacity key={index} onPress={() => viewArticle(article)}>
            <View style={[styles.newsCard, styles.shadow]}>
              <View style={styles.image}>
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
              <View style={styles.newsSummary}>
                <Text style={styles.newsPrimary}>{`${article.title.slice(
                  0,
                  53,
                )}...`}</Text>
                <Text style={styles.newsSecondary}>{article.source.name}</Text>
                <Text style={styles.newsSecondary}>
                  {article.publishedAt.slice(0, 9)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {article && (
        <Modal presentationStyle="fullScreen" visible={openModal}>
          <View>
            <View
              style={(styles.horizontalContain, {backgroundColor: '#ECEEF5'})}>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <Icon
                  name="arrow-left"
                  color="#49BEB7"
                  style={styles.iconGrp}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text>{article.title}</Text>
        </Modal>
      )}
    </View>
  );
}
