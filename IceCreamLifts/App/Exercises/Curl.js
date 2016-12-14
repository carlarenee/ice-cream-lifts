import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Curl extends Component {

  render() {
    return(
      <View>
        <Text style={styles.largeWords}>{this.props.ex}</Text>
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
  }
})
