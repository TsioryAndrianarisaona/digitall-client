import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Documents from '../views/Documents/Documents';
import Home from '../views/Home/Home';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={{
          title: 'Les documents',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
