import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Squat extends Component {

  render() {
    return(
      <View>
        <View>
          <Text>{this.props.length}</Text>
        </View>
        <View>
          <Text style={styles.setBox}>{this.props.comp}</Text>
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
