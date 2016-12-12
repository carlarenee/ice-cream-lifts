import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class LoginSignup extends Component {

  onLoginPress(){
    this.props.navigator.push({
      id: 'Login'
    });
  };

  onSignupPress() {
    this.props.navigator.push({
      id: 'Signup'
    })
  }

  onSignupSubmit() {
    console.log('post signup')
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onLoginPress.bind(this)}>
          <Text style={styles.largeWords}>
            Login
          </Text>
        </TouchableHighlight>
        <Text>or</Text>
        <TouchableHighlight onPress={this.onSignupPress.bind(this)}>
          <Text style={styles.largeWords}>
            Signup
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeWords: {
    fontSize: 30,
  },
})
