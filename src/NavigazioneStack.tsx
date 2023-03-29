import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function NavigazioneStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'red'}}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Homepage'}}
        />
        <Stack.Screen
          name="Profilo"
          component={ProfiloScreen}
          options={({route}: any) => ({
            title: 'Profilo di ' + route.params?.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}: any) {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go To Profilo"
        onPress={() => navigation.navigate('Profilo', {name: 'Fabrizio'})}
      />
    </View>
  );
}

function ProfiloScreen({navigation, route}: any) {
  return (
    <View>
      <Text>Profilo di {route.params.name}</Text>
      <Button title="Torna indietro" onPress={() => navigation.goBack()} />
    </View>
  );
}
