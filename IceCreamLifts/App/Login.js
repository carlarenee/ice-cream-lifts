import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsername: '',
      loginPassword: ''
    }
  }

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
      if (data.login === true) {
        this.props.navigator.push({
          id: 'Setup'
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

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.loginUsername}
          onChangeText={(loginUsername) => this.setState({ loginUsername })}
        />
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.loginPassword}
          onChangeText={(loginPassword) => this.setState({ loginPassword })}
        />
        <TouchableHighlight onPress={this.onLoginSubmit.bind(this)}>
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
