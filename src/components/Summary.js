import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NEWS_API_KEY} from 'react-native-dotenv';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import {Picker} from '@react-native-community/picker';
import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
import DoctorWomanSVG from 'src/assets/svg/doctor-woman.svg';
import RemoteWorkSVG from 'src/assets/svg/remote-work-woman.svg';
const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

let data = ['Singapore', 'Worldwide'];

export default function Summary() {
  const [selectedRegion, setSelectedRegion] = useState('singapore');

  return (
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
              {data.map(region => (
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
      <View style={styles.verticalContain}>
        <View
          style={[
            styles.card,
            styles.shadow,
            styles.confirmed,
            styles.horizontalContain,
          ]}>
          <View>
            <Text style={styles.cardPrimary}>20,000</Text>
            <Text style={styles.cardSecondary}>Confirmed Cases</Text>
          </View>
          <View>
            <MaskWomanSVG width={100} height={90} />
          </View>
        </View>
        <View
          style={[
            styles.card,
            styles.shadow,
            styles.death,
            styles.horizontalContain,
          ]}>
          <View>
            <DoctorWomanSVG width={100} height={90} />
          </View>
          <View>
            <Text style={[styles.cardPrimary, {color: '#FF5959'}]}>5000</Text>
            <Text style={[styles.cardSecondary, {color: '#FF5959'}]}>
              Deaths
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.card,
            styles.shadow,
            styles.recovered,
            styles.horizontalContain,
          ]}>
          <View>
            <Text style={styles.cardPrimary}>10,000</Text>
            <Text style={styles.cardSecondary}>Recovered</Text>
          </View>
          <View>
            <RemoteWorkSVG width={100} height={90} />
          </View>
          <View />
        </View>
      </View>
    </View>
  );
}
