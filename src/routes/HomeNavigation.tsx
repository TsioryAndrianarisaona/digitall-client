import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Documents from '../views/Documents/Documents';
import Home from '../views/Home/Home';

const Stack = createStackNavigator();

const HomeNavigation = ({route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={route.params}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Documents"
        component={Documents}
        options={({route}) => ({
          title: route.params ? route.params.title : '',
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
