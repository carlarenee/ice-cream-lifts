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
import LoggedIn from './App/LoggedIn'
import TryAgain from './App/TryAgain'

export default class IceCreamLifts extends Component {

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'First':
        return (<LoginSignup navigator={navigator} title={'LoginSignup'} />)
      case 'Login':
        return (<Login navigator={navigator} title={'Login'} />)
      case 'Signup':
        return (<Signup navigator={navigator} title={'Signup'} />)
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'First'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    );
  }
}

AppRegistry.registerComponent('IceCreamLifts', () => IceCreamLifts);
