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
      let trendData = preprocess(
        action.fetchedNews,
        action.fetchedTrend,
        action.fetchedSummary,
      );
      // console.log('Trend Data is >> ', trendData);
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

    case 'RESET':
      return {
        loading: true,
        summaryData: {},
        trendData: {},
        newsData: [],
      };
    default:
      return state;
  }
};

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('sg');
  const [summaryRegion, setSummaryRegion] = useState('countries/sg');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(0);

  const handleChangeRegion = region => {
    console.log(region);
    if (region == '') {
      setSummaryRegion('all');
    } else if (region == 'sg') {
      setSummaryRegion('countries/sg');
    }
    setSelectedRegion(region);
    dispatch({type: 'RESET'});
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('loading state is >>> ', state.loading);
    axios
      .all([
        axios.get(
          `https://corona.lmao.ninja/v2/${summaryRegion}?yesterday&strict&query`,
        ),
        axios.get(
          `https://newsapi.org/v2/top-headlines?q=covid&language=en&country=${selectedRegion}&apiKey=${NEWS_API_KEY}`,
        ),
        axios.get(`https://covid19-api.org/api/timeline/${selectedRegion}`),
      ])
      .then(
        axios.spread((fetchedSummary, fetchedNews, fetchedTrend) => {
          console.log(
            'Fetched News Data >> ',
            fetchedNews.data.articles.slice(0, 5),
          );
          // console.log('Fetched Trend Data >> ', fetchedTrend.data);
          // console.log('Fetched Summary Data >> ', fetchedSummary.data);
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
  }, [counter]);

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
                      handleChangeRegion(itemValue)
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
  } else
    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" />
      </View>
    );
}
