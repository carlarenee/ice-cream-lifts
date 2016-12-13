import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginSignup from './App/LoginSignup'
import Login from './App/Login'
import Signup from './App/Signup'
import Setup from './App/Setup'
import FirstWorkout from './App/FirstWorkout'

export default class IceCreamLifts extends Component {

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    if (route.id === 'LoginSignup') {
      return (<LoginSignup navigator={navigator} title={'LoginSignup'} />)
    }
    if (route.id === 'Login') {
      return (<Login navigator={navigator} title={'Login'} {...route.passProps} />)
    }
    if (route.id === 'Signup') {
      return (<Signup navigator={navigator} title={'Signup'} />)
    }
    if (route.id === 'Setup') {
      return (<Setup navigator={navigator} title={'Setup'} />)
    }
    if (route.id === 'FirstWorkout') {
      return (<FirstWorkout navigator={navigator} title={'FirstWorkout'} {route.passProps} />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'LoginSignup'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
}

AppRegistry.registerComponent('IceCreamLifts', () => IceCreamLifts);
