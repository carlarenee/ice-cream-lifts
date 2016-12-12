import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }

  onSignupSubmit() {
    console.log('onSignupSubmit launching')
    return fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'Application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
      })
    })
    .then(r => r.json())
    .then( (data) => {
      console.log('signup has been submitted', this.state, data)
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
        />
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <Text style={styles.largeWords}>
          Confirm Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.confirmPassword}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
        />
        <TouchableHighlight onPress={this.onSignupSubmit.bind(this)}>
          <Text style={styles.goWords}>
            Go!
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
    fontSize: 20,
  },
  enterInfo: {
    margin: 10,
    height: 50,
    width: 240,
    alignSelf: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },
  goWords: {
    fontSize: 40,
    width: 240,
    textAlign: 'center',
    backgroundColor: '#addfad',
  }
})
