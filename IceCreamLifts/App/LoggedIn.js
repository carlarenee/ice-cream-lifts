import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Signup extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>Logged in!</Text>
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
