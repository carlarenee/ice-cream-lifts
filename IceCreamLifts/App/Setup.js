import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Setup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: '',
      selectedNewbieColor: '#fafafa',
      selectedVeteranColor: '#fafafa',
    }
  }

  selectedNewbie() {
    this.setState({
      selected: 'newbie',
      selectedNewbieColor: '#addfad',
      selectedVeteranColor: '#fafafa',
    });
  };

  selectedVeteran() {
    this.setState({
      selected: 'veteran',
      selectedVeteranColor: '#addfad',
      selectedNewbieColor: '#fafafa',
    });
  };

  onSubmitSetup() {
    this.props.navigator.push({
      id: 'FirstWorkout'
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.headline}>Choose one to continue:</Text>
        <TouchableHighlight style={{backgroundColor: this.state.selectedNewbieColor}} onPress={this.selectedNewbie.bind(this)}>
          <View style={styles.setupOption}>
            <Text style={styles.largeWords}>I'm new!</Text>
            <Text style={styles.smallWords}>Start from scratch</Text>
            <Text style={styles.smallWords}>(recommended)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{backgroundColor: this.state.selectedVeteranColor}} onPress={this.selectedVeteran.bind(this)}>
          <View style={styles.setupOption}>
            <Text style={styles.largeWords}>I know what I'm doing.</Text>
            <Text style={styles.smallWords}>Enter starting weights</Text>
            <Text style={styles.smallWords}>(coming soon!)</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onSubmitSetup.bind(this)}>
          <Text style={styles.goWords}>
            I'm ready!
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
  },
  smallWords: {
    fontSize: 15,
    textAlign: 'center',
  },
  largeWords: {
    marginTop: 60,
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  setupOption: {
    height: 200,
    width: 350,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  goWords: {
    fontSize: 40,
    width: 240,
    textAlign: 'center',
  },
  checkbox: {
    width: 50,
    height: 50,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: 'grey',
  },
  headline: {
    fontSize: 35,
  }
})
