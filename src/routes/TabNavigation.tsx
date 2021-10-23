import * as React from 'react';
import Home from '../views/Home/Home';
import Folder from '../views/Folder/Folder';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Icon} from 'react-native-elements';
import {Colors} from '../styles/Colors';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: Colors.red}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Mes informations',
          tabBarIcon: () => (
            <Icon
              name="home"
              type="antdesign"
              color={Colors.white}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Folder"
        component={Folder}
        options={{
          tabBarLabel: 'Mes documents',
          tabBarIcon: () => (
            <Icon
              name="folder1"
              type="antdesign"
              color={Colors.white}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
