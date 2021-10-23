import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Scan from '../views/Scan/Scan';
import CheckCode from '../views/CheckCode/CheckCode';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{
            title: 'Scannez ici',
          }}
        />
        <Stack.Screen
          name="CheckCode"
          component={CheckCode}
          options={{
            title: 'Vérifier votre code',
            headerRight: () => <></>,
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            title: '',
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
