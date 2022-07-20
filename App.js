import * as React from 'react';
import TabNavigation from './navigation/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {Rajdhani_600SemiBold} from '@expo-google-fonts/Rajdhani_600SemiBold'
export default class App extends React.Component{
  render (){
    return (
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
    )
  }
}