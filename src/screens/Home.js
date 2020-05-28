import React, {useState, useReducer, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
import CaseTrend from 'src/components/CaseTrend';
import LatestNews from 'src/components/LatestNews';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import {Picker} from '@react-native-community/picker';
import {NEWS_API_KEY} from 'react-native-dotenv';
import axios from 'axios';

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

let pickerData = ['Singapore', 'Worldwide'];
const initialState = {
  loading: true,
  error: null,
  summaryData: {},
  trendData: {},
  newsData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        summaryData: action.fetchedSummary,
        // trendData: action.fetchedTrend,
        newsData: action.fetchedNews,
        loading: false,
      };

    case 'ERROR':
      return {
        error: action.errorMsg,
        summaryData: action.fetchedSummary,
        // trendData: action.fetchedTrend,
        newsData: action.fetchedNews,
        loading: false,
      };

    default:
      return state;
  }
};

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('singapore');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .all([
        axios.get(
          'https://corona.lmao.ninja/v2/countries/Singapore?yesterday&strict&query',
        ),
        axios.get(
          `https://newsapi.org/v2/top-headlines?q=covid&language=en&apiKey=${NEWS_API_KEY}`,
        ),
      ])
      .then(
        axios.spread((fetchedSummary, fetchedNews) => {
          // console.log('NEWS >> ', fetchedNews.data.articles.slice(0, 1));
          // console.log('summary >> ', fetchedSummary.data);
          dispatch({
            type: 'SUCCESS',
            fetchedSummary: fetchedSummary.data,
            fetchedNews: fetchedNews.data.articles.slice(0, 5),
          });
        }),
      )
      .catch(error => {
        dispatch({type: 'ERROR', errorMsg: error.message});
      });
  }, [selectedRegion]);

  if (!state.loading) {
    return (
      <>
        <ScrollView style={styles.container}>
          <Header title="Covid Statistics" />
          <View style={styles.section}>
            <View style={styles.horizontalContain}>
              <View style={styles.viewLeft}>
                <Text style={styles.titleText}>Summary</Text>
              </View>
              <View style={styles.viewRight}>
                <TouchableOpacity style={[styles.picker, styles.shadow]}>
                  <Picker
                    style={styles.pickerLabel}
                    selectedValue={selectedRegion}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedRegion(itemValue)
                    }>
                    {pickerData.map(region => (
                      <Picker.Item
                        key={region}
                        label={region}
                        value={region}
                        color="#1E6262"
                      />
                    ))}
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>
            <Summary data={state.summaryData} />
          </View>
          <CaseTrend />
          <LatestNews data={state.newsData} />
        </ScrollView>
      </>
    );
  } else return <ActivityIndicator />;
}
