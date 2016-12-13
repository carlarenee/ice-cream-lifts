import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class FirstWorkout extends Component {

  createFirstWorkout() {
    console.log('*********** first workout props', this.state)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>You don't have any workouts yet!</Text>
        <TouchableHighlight onPress={this.createFirstWorkout}>
          <Text style={styles.goWords}>Tap here to begin!</Text>
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
    marginBottom: 25,
    textAlign: 'center',
  },
  goWords: {
    fontSize: 20,
    height: 50,
    width: 240,
    textAlign: 'center',
    backgroundColor: '#addfad',
    textAlign: 'center',
  }
})
