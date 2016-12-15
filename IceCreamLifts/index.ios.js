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
import Workout from './App/Workout'

export default class IceCreamLifts extends Component {
  constructor(props) {
    super(props)

    this.state= {
      currentSets: [],
      weights: {
        squatWeight: 0,
        benchWeight: 0,
        aRowWeight: 0,
        crunchWeight: 0,
        curlWeight: 0,
        triWeight: 0,
        hyperWeight: 0
      }
    }
  }

  onSignupSubmit(renderAfterSignup) {
    console.log('onSignupSubmit launching')
    return fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'Application/json'
      },
      body: JSON.stringify({
        signupUsername: this.state.signupUsername,
        signupPassword: this.state.signupPassword,
        signupConfirm: this.state.signupConfirm
      })
    })
    .then(r => r.json())
    .then( (data) => {
      if (data.signup === true) {
        let myDate = new Date();
        myDateStr = `${myDate.getFullYear()}-${(myDate.getMonth()+1)}-${(myDate.getDate())}`;
        this.setState({
          loggedInUser: this.state.signupUsername,
          signupUsername: '',
          signupPassword: '',
          totalWorkouts: 0,
          wkt_date: myDateStr,
        });
        renderAfterSignup('Setup')
      } else {
        Alert.alert(
          'Whoops!',
          'Passwords do not match.',
          [
            {text: 'Try Again', onPress: () => console.log('try again pressed'), style: 'default'}
          ]
        )
      }
    })
    .then( () => {
      console.log('signed up!')
    })
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
      let myDate = new Date();
      myDateStr = `${myDate.getFullYear()}-${(myDate.getMonth()+1)}-${(myDate.getDate())}`;
      this.setState({
        loginUsername: '',
        loginPassword: '',
        user_id: data.user_id,
        loggedInUser: data.username,
        totalWorkouts: data.total_workouts,
        wkt_date: `${myDate.getFullYear()}-${(myDate.getMonth()+1)}-${(myDate.getDate())}`
      })
      if (data.total_workouts === 0) {
        renderAfterLogin('Setup')
      } else {
        renderAfterLogin('Workout')
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

  createWorkout(moveToWorkout) {
    console.log(this.state)
    if (this.state.totalWorkouts === 0) {
      const incrementedTotal = this.state.totalWorkouts + 1
      const username = this.state.loggedInUser
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
        	"u": this.state.loggedInUser,
        	"n": incrementedTotal
        })
      })
      .then( () => {
        this.incrementTotalWorkouts(incrementedTotal, username);
        moveToWorkout('Workout');
      })
    }
  }

  incrementRep(id) {
    console.log('id inside incrementRep', id)
    return fetch(`http://localhost:3000/api/sets/increment/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/JSON',
      },
    })
    .then(() => {
      this.getCurrentSets();
    })
  }

  incrementTotalWorkouts(t, u) {
    return fetch('http://localhost:3000/user/count', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        total_workouts: t,
        username: u
      })
    })
  }

  getCurrentSets() {
    console.log('getting current sets!')
    return fetch('http://localhost:3000/api/sets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.loggedInUser,
        wkt_date: this.state.wkt_date,
      })
    })
    .then(r => r.json())
    .then((data) => {
      let squatWeight = 0;
      let aRowWeight = 0;
      let benchWeight = 0;
      let shrugWeight = 0;
      let triWeight = 0;
      let hyperWeight = 0;
      let curlWeight = 0;
      let crunchWeight = 0;

      for(let i = 0; i < data.length; i++) {
        if (data[i].ex === 'S') {
          squatWeight = data[i].weight
        }
        if (data[i].ex === 'AR') {
          aRowWeight = data[i].weight
        }
        if (data[i].ex === 'P') {
          benchWeight = data[i].weight
        }
        if (data[i].ex === 'B') {
          shrugWeight = data[i].weight
        }
        if (data[i].ex === 'T') {
          triWeight = data[i].weight
        }
        if (data[i].ex === 'H') {
          hyperWeight = data[i].weight
        }
        if (data[i].ex === 'C') {
          crunchWeight = data[i].weight
        }
        if (data[i].ex === 'I') {
          curlWeight = data[i].weight
        }
      }
      this.setState({
        currentSets: data,
        weights: {
          squatWeight: squatWeight,
          benchWeight: benchWeight,
          aRowWeight: aRowWeight,
          crunchWeight: crunchWeight,
          curlWeight: curlWeight,
          triWeight: triWeight,
          hyperWeight: hyperWeight
        }
      })
    })
    .then( () => {
      console.log('got current sets', this.state)
    })
  }

  makeWeightState() {

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


  handleSignupUsername(text) {
    this.setState({
      signupUsername: text
    })
  }

  handleSignupPassword(text) {
    this.setState({
      signupPassword: text
    })
  }

  handleSignupConfirm(text) {
    this.setState({
      signupConfirm: text
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
              return (
                <LoginSignup
                  navigator={navigator}
                  title={'LoginSignup'}
                />
              )
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
              return (
                <Signup
                  navigator={navigator}
                  title={'Signup'}
                  handleSignupUsername={this.handleSignupUsername.bind(this)}
                  handleSignupPassword={this.handleSignupPassword.bind(this)}
                  handleSignupConfirm={this.handleSignupConfirm.bind(this)}
                  onSignupSubmit={this.onSignupSubmit.bind(this)}
                />
              )
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
            if (route.id === 'Workout') {
              return (
                <Workout
                  navigator={navigator}
                  title={'Workout'}
                  getCurrentSets={this.getCurrentSets.bind(this)}
                  currentSets={this.state.currentSets}
                  weights={this.state.weights}
                  incrementRep={this.incrementRep.bind(this)}
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
