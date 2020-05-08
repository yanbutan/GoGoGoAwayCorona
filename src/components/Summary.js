import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import {Picker} from '@react-native-community/picker';

export default function Summary() {
  const [selectedRegion, setSelectedRegion] = useState('singapore');

  return (
    <>
      <View style={styles.summary}>
        <View style={styles.viewLeft}>
          <Text style={styles.titleText}>Summary</Text>
        </View>
        <View style={styles.viewRight}>
          <TouchableOpacity style={styles.picker}>
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
        <View style={[styles.card, styles.confirmed]}>
          <Text>1</Text>
        </View>
        <View style={[styles.card, styles.death]}>
          <Text>2</Text>
        </View>
        <View style={[styles.card, styles.recovered]}>
          <Text>3</Text>
        </View>
      </View>
    </>
  );
}

const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

let data = ['Singapore', 'Worldwide'];
