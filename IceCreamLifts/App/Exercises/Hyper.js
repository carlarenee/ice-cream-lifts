import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Hyper extends Component {

  render() {
    return(
      <View>
        <Text style={styles.setBox}>{this.props.comp}</Text>
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
  setBox: {
    width: 50,
    height: 50,
    backgroundColor: '#addfad'
  }
})
