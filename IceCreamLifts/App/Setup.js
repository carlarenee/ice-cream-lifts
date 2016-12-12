import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Setup extends Component {

  render() {
    return(
      <View style={styles.container}>
        <TouchableHighlight style={styles.setupOption}>
          <View>
            <Text style={styles.largeWords}>I'm new!</Text>
            <Text style={styles.smallWords}>Start from scratch (recommended)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.setupOption}>
          <View>
            <Text style={styles.largeWords}>I know what I'm doing.</Text>
            <Text style={styles.smallWords}>Enter starting weights</Text>
          </View>
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
  smallWords: {
    fontSize: 20,
  },
  largeWords: {
    fontSize: 40,
  },
  setupOption: {
    margin: 10,
    height: 200,
    width: 350,
    alignSelf: 'center',
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
