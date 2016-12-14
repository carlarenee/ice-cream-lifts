import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class FirstWorkout extends Component {

  moveToWorkout(scene) {
    this.props.navigator.push({
      id: scene
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.largeWords}>You don't have any workouts yet!</Text>
        <TouchableHighlight onPress={() => this.props.createWorkout(this.moveToWorkout.bind(this))}>
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
