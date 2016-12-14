import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Shrug extends Component {

  render() {
    return(
      <View>
        <View>
          <TouchableHighlight onPress={() => this.props.incrementRep(this.props.set_id)}  style={styles.repBox}>
            <Text style={styles.setBox}>{this.props.comp}</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text style={styles.setNumber}>{this.props.set_num + 1}</Text>
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
    backgroundColor: '#addfad',
    textAlign: 'center',
  },
  exercise: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
  },
  setNumber: {
    textAlign: 'center'
  },
  repBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
