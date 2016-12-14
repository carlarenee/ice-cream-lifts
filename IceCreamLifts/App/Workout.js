import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import ARow from './Exercises/ARow';
import Bench from './Exercises/Bench';
import Crunch from './Exercises/Crunch';
import Curl from './Exercises/Curl';
import Hyper from './Exercises/Hyper';
import Shrug from './Exercises/Shrug';
import Squat from './Exercises/Squat';
import Tri from './Exercises/Tri';

export default class Workout extends Component {

  componentDidMount() {
    console.log('mounted')
    this.props.getCurrentSets();
  };

  renderS() {
    const squats = this.props.currentSets.filter((set) => {
      return set.ex === 'S'
    });
    return squats.map((set, index) => {
      return(
        <View key={index}>
          <Squat
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderAR() {
    const ARows = this.props.currentSets.filter((set) => {
      return set.ex === 'AR'
    });
    return ARows.map((set, index) => {
      return(
        <View key={index}>
          <ARow
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderB() {
    const shrugs = this.props.currentSets.filter((set) => {
      return set.ex === 'B'
    });
    return shrugs.map((set, index) => {
      return(
        <View key={index}>
          <Shrug
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderT() {
    const tris = this.props.currentSets.filter((set) => {
      return set.ex === 'T'
    });
    return tris.map((set, index) => {
      return(
        <View key={index}>
          <Tri
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderI() {
    const curls = this.props.currentSets.filter((set) => {
      return set.ex === 'I'
    });
    return curls.map((set, index) => {
      return(
        <View key={index}>
          <Curl
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderP() {
    const benches = this.props.currentSets.filter((set) => {
      return set.ex === 'P'
    });
    return benches.map((set, index) => {
      return(
        <View key={index}>
          <Bench
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderC() {
    const crunches = this.props.currentSets.filter((set) => {
      return set.ex === 'C'
    });
    return crunches.map((set, index) => {
      return(
        <View key={index}>
          <Crunch
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  renderH() {
    const hypers = this.props.currentSets.filter((set) => {
      return set.ex === 'H'
    });
    return hypers.map((set, index) => {
      return(
        <View key={index}>
          <Hyper
            ex={set.ex}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
          />
        </View>
      )
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.topNav}></View>
        <ScrollView style={styles.scrollBox}>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderS()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderP()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderAR()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderI()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderT()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderB()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderC()}
          </ScrollView>
          <ScrollView horizontal={true} style={styles.exercise}>
            {this.renderH()}
          </ScrollView>
        </ScrollView>
        <View style={styles.botNav}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  largeWords: {
    fontSize: 20,
  },
  topNav: {
    height: 100,
    backgroundColor: 'red',
  },
  botNav: {
    height: 100,
    backgroundColor: 'blue',
  },
  exercise: {
    height: 150,
  }
})
