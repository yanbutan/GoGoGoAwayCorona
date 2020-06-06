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
import ArticleModal from 'src/components/ArticleModal';
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
                    borderTopLeftRadius: 10,
                    borderTopRadius: 10,
                  }}
                />
              </View>
              <View style={styles.newsSummary}>
                <Text numberOfLines={2} style={styles.newsPrimary}>{`${
                  article.title
                }...`}</Text>
                <Text style={styles.newsSecondary}>{article.source.name}</Text>
                <Text style={styles.newsSecondary}>
                  {article.publishedAt.slice(0, 10)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {article && (
        <Modal presentationStyle="fullScreen" visible={openModal}>
          <ArticleModal article={article} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </View>
  );
}
