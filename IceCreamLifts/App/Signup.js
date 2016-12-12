import React, { Component } from 'react';
import {
  Alert,
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
      signupUpsername: '',
      signupPassword: '',
      signupConfirm: '',
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
        signupUsername: this.state.signupUsername,
        signupPassword: this.state.signupPassword,
        signupConfirm: this.state.signupConfirm
      })
    })
    .then(r => r.json())
    .then( (data) => {
      console.log(data.signup)
      if (data.signup === true) {
        this.props.navigator.push({
          id: 'Setup'
        })
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
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupUsername}
          onChangeText={(signupUsername) => this.setState({ signupUsername })}
        />
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupPassword}
          onChangeText={(signupPassword) => this.setState({ signupPassword })}
        />
        <Text style={styles.largeWords}>
          Confirm Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupConfirm}
          onChangeText={(signupConfirm) => this.setState({ signupConfirm })}
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
