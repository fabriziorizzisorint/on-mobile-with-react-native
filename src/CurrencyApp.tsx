import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrenciesScreen from './screens/Currencies';
import ConverterScreen from './screens/Converter';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function CurrencyApp() {
  const currenciesIcon = ({color, size}: any) => (
    <FontAwesome name="euro" size={size} color={color} />
  );

  const converterIcon = ({color, size}: any) => (
    <FontAwesome name="refresh" size={size} color={color} />
  );

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Currencies"
          component={CurrenciesScreen}
          options={{tabBarIcon: currenciesIcon}}
        />
        <Tab.Screen
          name="Converter"
          component={ConverterScreen}
          options={{tabBarIcon: converterIcon}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
