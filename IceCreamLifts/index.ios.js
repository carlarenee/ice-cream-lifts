import React, { Component } from 'react';
import {
  Alert,
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
  constructor(props) {
    super(props)
  }

  onLoginSubmit(renderAfterLogin) {
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
      this.setState({
        loginUsername: '',
        loginPassword: '',
        user_id: data.user_id,
        loggedInUser: data.username,
        totalWorkouts: data.total_workouts
      })
      if (data.total_workouts === 0) {
        renderAfterLogin('Setup')
      } else {
        renderAfterLogin('MyWorkouts')
      }
    } else {
      Alert.alert(
        'Whoops!',
        'Password incorrect.',
        [
          {text: 'Try Again', onPress: () => console.log('try again pressed'), style: 'default'}
        ]
      )
    }})
    .then( () => {
      console.log(this.state);
    })
  }

  handleLoginUsername(text) {
    this.setState({
      loginUsername: text
    })
  }

  handleLoginPassword(text) {
    this.setState({
      loginPassword: text
    })
  }

  createWorkout(moveToWorkout) {
    console.log(this.state)
    if (this.state.totalWorkouts === 0) {
      const incrementedTotal = this.state.totalWorkouts + 1
      const user_id = this.state.user_id
      return fetch('http://localhost:3000/api/create/A', {
        method: 'POST',
        headers: {
          'content-type': 'application/JSON'
        },
        body: JSON.stringify({
        	"S": 190,
        	"P": 190,
        	"AR": 190,
        	"B": 190,
        	"T": 190,
        	"I": 190,
        	"H": 190,
        	"C": 190,
        	"d": "now",
        	"u": user_id,
        	"n": incrementedTotal
        })
      })
      .then( () => {
        this.incrementTotalWorkouts(incrementedTotal, user_id);
        moveToWorkout();
      })
    }
  }

  incrementTotalWorkouts(t, u) {
    return fetch('http://localhost:3000/user/count', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        total_workouts: t,
        user_id: u
      })
    })
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'LoginSignup'
        }}
        renderScene={(route, navigator) => {
            _navigator = navigator;
            if (route.id === 'LoginSignup') {
              return (<LoginSignup navigator={navigator} title={'LoginSignup'} />)
            }
            if (route.id === 'Login') {
              return (
                <Login
                  navigator={navigator}
                  title={'Login'}
                  handleLoginUsername={this.handleLoginUsername.bind(this)}
                  handleLoginPassword={this.handleLoginPassword.bind(this)}
                  onLoginSubmit={this.onLoginSubmit.bind(this)}
                />
              )
            }
            if (route.id === 'Signup') {
              return (<Signup navigator={navigator} title={'Signup'} />)
            }
            if (route.id === 'Setup') {
              return (<Setup navigator={navigator} title={'Setup'} />)
            }
            if (route.id === 'FirstWorkout') {
              return (
                <FirstWorkout
                  navigator={navigator}
                  title={'FirstWorkout'}
                  createWorkout={this.createWorkout.bind(this)}
                />
              )
            }
          }
        }
      />
    );
  }
}

AppRegistry.registerComponent('IceCreamLifts', () => IceCreamLifts);
