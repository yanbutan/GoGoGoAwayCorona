import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home';
import SafetyMeasures from 'src/screens/SafetyMeasures';
import Help from 'src/screens/Help';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomNavStyle from 'src/assets/jss/BottomNavStyle';
const useStyles = StyleSheet.create(BottomNavStyle);
const styles = useStyles();
const Stack = createBottomTabNavigator();
const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(236, 238, 245)',
    background: 'rgb(236, 238, 245)',
    card: '#fff',
    text: '#2D767F',
    border: 'rgb(236, 238, 245)',
  },
};

export default function Navigator() {
  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#49BEB7',
            style: styles.navPanel,
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="home"
                  size={size}
                  color={color}
                  style={styles.iconGrp}
                />
              ),
            }}
          />
          <Stack.Screen
            name="SafetyMeasures"
            component={SafetyMeasures}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="safety-goggles"
                  size={size}
                  color={color}
                  style={styles.iconGrp}
                />
              ),
            }}
          />
          <Stack.Screen
            name="Help"
            component={Help}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="help-network-outline"
                  size={size}
                  color={color}
                  style={styles.iconGrp}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
