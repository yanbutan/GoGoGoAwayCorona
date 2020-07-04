import React from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Header from 'src/components/Header';
import MaskSVG from 'src/assets/svg/mask.svg';
import WashHandsSVG from 'src/assets/svg/washHands.svg';
import DrinkWaterSVG from 'src/assets/svg/drinkingWater.svg';
import FeverSVG from 'src/assets/svg/fever.svg';
import DoctorSVG from 'src/assets/svg/doctor.svg';

export default function SafetyMeasures() {
  return (
    <ScrollView style={styles.container}>
      <Header title={`Safety First Boys & Girls`} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 32,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C28'}}>
            <Text
              style={{
                fontSize: 24,
                color: '#E53535',
                fontWeight: 'bold',
              }}>
              {`1. `}
            </Text>
            Wear a mask whenever you're out please. Let's do our part to be
            socially responsible.
          </Text>
        </View>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <MaskSVG width={100} height={100} />
        </View>
      </View>
      {/* second part */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 32,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <WashHandsSVG width={100} height={100} />
        </View>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C28'}}>
            <Text
              style={{
                fontSize: 24,
                color: '#02DC8D',
                fontWeight: 'bold',
              }}>
              {`2. `}
            </Text>
            Wash your hands whenver you can. Wash with soap then at least got
            hope.
          </Text>
        </View>
      </View>
      {/* third part */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 32,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C28'}}>
            <Text
              style={{
                fontSize: 24,
                color: '#004FC4',
                fontWeight: 'bold',
              }}>
              {`3. `}
            </Text>
            Drink water stay hydrated my G. Don't be acting all thirsty mah guy.
          </Text>
        </View>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <DrinkWaterSVG width={100} height={100} />
        </View>
      </View>
      {/* fourth part */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 32,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <FeverSVG width={100} height={100} />
        </View>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C28'}}>
            <Text
              style={{
                fontSize: 24,
                color: '#4D0099',
                fontWeight: 'bold',
              }}>
              {`4. `}
            </Text>
            If you have duh fever den rest at duh home stoopid. Lie on the bed
            rerax and watch sum netfrix
          </Text>
        </View>
      </View>
      {/* fifth part */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 32,
          marginVertical: 24,
          alignItems: 'center',
        }}>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C28'}}>
            <Text
              style={{
                fontSize: 24,
                color: '#00B7C4',
                fontWeight: 'bold',
              }}>
              {`5. `}
            </Text>
            Visit your local clinic if the fever doesnt go down within 7 days.
            But dont doctor hop hor naughty boy
          </Text>
        </View>
        <View
          style={{flex: 0.4, alignItems: 'center', justifyContent: 'center'}}>
          <DoctorSVG width={100} height={100} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ECEEF5',
  },
});
