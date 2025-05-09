import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ClinicDetailScreen from './src/screens/ClinicDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563eb', // blue-600
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ClinicDetail" 
          component={ClinicDetailScreen}
          options={{
            title: 'Detail Klinik',
            headerBackTitle: 'Kembali',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
