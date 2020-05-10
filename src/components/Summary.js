import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import HeaderStyle from 'src/assets/jss/HeaderStyle';
import MaskWomanSVG from 'src/assets/svg/mask-woman.svg';
import DoctorWomanSVG from 'src/assets/svg/doctor-woman.svg';
import RemoteWorkSVG from 'src/assets/svg/remote-work-woman.svg';
import {useFetch} from 'src/hooks/useFetch';
const useStyles = StyleSheet.create(HeaderStyle);
const styles = useStyles();

export default function Summary() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const fetchResponse = useFetch(
  //   'https://corona.lmao.ninja/v2/countries/Singapore?yesterday&strict&query',
  //   {isLoading: true, data: null},
  // );
  // setData(fetchResponse.data);
  useEffect(() => {
    fetch(
      'https://corona.lmao.ninja/v2/countries/Singapore?yesterday&strict&query',
    )
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.verticalContain}>
          <View
            style={[
              styles.card,
              styles.shadow,
              styles.confirmed,
              styles.horizontalContain,
            ]}>
            <View>
              <Text style={styles.cardPrimary}>{data.cases}</Text>
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
              <Text style={[styles.cardPrimary, {color: '#FF5959'}]}>
                {data.deaths}
              </Text>
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
              <Text style={styles.cardPrimary}>{data.recovered}</Text>
              <Text style={styles.cardSecondary}>Recovered</Text>
            </View>
            <View>
              <RemoteWorkSVG width={100} height={90} />
            </View>
            <View />
          </View>
        </View>
      )}
    </>
  );
}
