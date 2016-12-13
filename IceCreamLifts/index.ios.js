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

export default class IceCreamLifts extends Component {

  onLoginSubmit() {
    return fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        loginUsername: this.state.loginUsername,
        loginPassword: this.state.loginPassword
      })
    })
    .then(r => r.json())
    .then( (data) => {
      if (!data.failed) {
        this.props.navigator.push({
          id: 'FirstWorkout'
        });
        this.setState({
          loginUsername: '',
          loginPassword: '',
          loggedInUser: data.username,
          totalWorkouts: data.total_workouts
        }, () => {
          console.log(this.state)
        })
      } else {
        Alert.alert(
          'Whoops!',
          'Password incorrect.',
          [
            {text: 'Try Again', onPress: () => console.log('try again pressed'), style: 'default'}
          ]
        )
      }
    })
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    if (route.id === 'First') {
      return (<LoginSignup navigator={navigator} title={'LoginSignup'} />)
    }
    if (route.id === 'Login') {
      return (<Login navigator={navigator} title={'Login'} />)
    }
    if (route.id === 'Signup') {
      return (<Signup navigator={navigator} title={'Signup'} />)
    }
    if (route.id === 'Setup') {
      return (<Setup navigator={navigator} title={'Setup'} />)
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
        onLoginSubmit={this.onLoginSubmit.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('IceCreamLifts', () => IceCreamLifts);
