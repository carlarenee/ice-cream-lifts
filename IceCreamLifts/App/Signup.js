import React, { Component } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
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
      signupUpsername: null,
      signupPassword: null,
      signupConfirm: null,
      behavior: 'padding',
    }
  }

  renderAfterSignup(scene) {
    this.props.navigator.push({
      id: scene,
    })
  }d

  render() {
    return(
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()} style={styles.backArrow}>
          <Image
            source={require('../images/tiny_arrow.png')}
          />
        </TouchableHighlight>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupUsername}
          onChangeText={(signupUsername) => this.props.handleSignupUsername(signupUsername)}
        />
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupPassword}
          onChangeText={(signupPassword) => this.props.handleSignupPassword(signupPassword)}
        />
        <Text style={styles.largeWords}>
          Confirm Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.signupConfirm}
          onChangeText={(signupConfirm) => this.props.handleSignupConfirm(signupConfirm)}
        />
        <TouchableHighlight onPress={() => this.props.onSignupSubmit(this.renderAfterSignup.bind(this))}>
          <Text style={styles.goWords}>
            Go!
          </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
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
  },
  backArrow: {
    position: 'absolute',
    top: 25,
    left: 25,
  },
})
