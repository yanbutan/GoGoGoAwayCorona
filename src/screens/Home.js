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
import {preprocess} from 'src/helpers/preprocess';
import axios from 'axios';

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

let pickerData = [
  {label: 'Singapore', value: 'sg'},
  {label: 'Worldwide', value: ''},
];
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
      let trendData = preprocess(action.fetchedNews, action.fetchedTrend);
      return {
        summaryData: action.fetchedSummary,
        trendData: trendData,
        newsData: action.fetchedNews,
        loading: false,
      };

    case 'ERROR':
      return {
        error: action.errorMsg,
        summaryData: action.fetchedSummary,
        trendData: trendData,
        newsData: action.fetchedNews,
        loading: false,
      };

    default:
      return state;
  }
};

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('sg');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .all([
        axios.get(
          'https://corona.lmao.ninja/v2/countries/sg?yesterday&strict&query',
        ),
        axios.get(
          `https://newsapi.org/v2/top-headlines?q=covid&language=en&country=sg&apiKey=${NEWS_API_KEY}`,
        ),
        axios.get('https://covid19-api.org/api/timeline/sg'),
      ])
      .then(
        axios.spread((fetchedSummary, fetchedNews, fetchedTrend) => {
          // console.log(
          //   'Fetched News Data >> ',
          //   fetchedNews.data.articles.slice(0, 5),
          // );
          // console.log('Fetched Trend Data >> ', fetchedTrend.data);
          dispatch({
            type: 'SUCCESS',
            fetchedSummary: fetchedSummary.data,
            fetchedNews: fetchedNews.data.articles.slice(0, 5),
            fetchedTrend: fetchedTrend.data,
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
                    {pickerData.map((region, index) => (
                      <Picker.Item
                        key={index}
                        label={region.label}
                        value={region.value}
                        color="#1E6262"
                      />
                    ))}
                  </Picker>
                </TouchableOpacity>
              </View>
            </View>
            <Summary data={state.summaryData} />
          </View>
          <CaseTrend data={state.trendData} />
          <LatestNews data={state.newsData} />
        </ScrollView>
      </>
    );
  } else return <ActivityIndicator />;
}
