import React, { Component } from 'react';
import {
  Image,
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
        <View>
          <Image
            style={styles.iceCream}
            source={require('../images/red_cone.png')}
          />
        </View>
        <View style={styles.curved}>
          <TouchableHighlight onPress={() => this.onLoginPress()}>
            <Text style={styles.largeWords}>
              Login
            </Text>
          </TouchableHighlight>
        </View>
        <Text style={styles.smallWord}>or</Text>
        <View style={styles.curved}>
          <TouchableHighlight onPress={this.onSignupPress.bind(this)}>
            <Text style={styles.largeWords}>
              Signup
            </Text>
          </TouchableHighlight>
        </View>
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
    fontSize: 30,
    margin: 5,
    textAlign: 'center'
  },
  curved: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: 150,
  },
  smallWord: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  },
  iceCream: {
    marginBottom: 70,
    resizeMode: 'cover',
    height: 200,
    width: 200,
  }
})
