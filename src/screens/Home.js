import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/components/Header';
import Summary from 'src/components/Summary';
import CaseTrend from 'src/components/CaseTrend';
import LatestNews from 'src/components/LatestNews';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import {Picker} from '@react-native-community/picker';
import {NEWS_API_KEY} from 'react-native-dotenv';

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

let pickerData = ['Singapore', 'Worldwide'];

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState('singapore');
  return (
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
        <Summary />
      </View>
      <CaseTrend />
      <LatestNews />
    </ScrollView>
  );
}
