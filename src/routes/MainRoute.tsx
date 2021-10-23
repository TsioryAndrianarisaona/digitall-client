import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Scan from '../views/Scan/Scan';

const Stack = createStackNavigator();

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}>
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{
            title: 'Scannez ici',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
