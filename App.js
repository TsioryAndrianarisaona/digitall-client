import React from 'react';
import MainRoute from './src/routes/MainRoute';
import {StatusBar} from 'react-native';

export default function App() {
  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor('white');

  return <MainRoute />;
}
