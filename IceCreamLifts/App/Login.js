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

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      totalWorkouts: null,
      behavior: 'padding',
    }
  }

  renderAfterLogin(scene) {
    this.props.navigator.push({
      id: scene,
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigator.pop()} style={styles.backArrow}>
          <Image
            source={require('../images/tiny_arrow.png')}
          />
        </TouchableHighlight>
        <Text style={styles.largeWords}>
          Username:
        </Text>
        <KeyboardAvoidingView behavior={this.state.behavior}>
          <TextInput style={styles.enterInfo}
            value={this.state.loginUsername}
            onChangeText={(loginUsername) => this.props.handleLoginUsername(loginUsername)}
          />
        </KeyboardAvoidingView>
        <Text style={styles.largeWords}>
          Password:
        </Text>
        <TextInput style={styles.enterInfo}
          value={this.state.loginPassword}
          onChangeText={(loginPassword) => this.props.handleLoginPassword(loginPassword)}
        />
        <TouchableHighlight onPress={() => {this.props.onLoginSubmit(this.renderAfterLogin.bind(this))}}>
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
  }
})
