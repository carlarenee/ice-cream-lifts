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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('mounted', this.props.currentSets)
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
            ex={'Squat'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={squats.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Row A'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={ARows.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Shrug'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={shrugs.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Tris'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={tris.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Curls'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={curls.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Bench'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={benches.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Cable Crunches'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={crunches.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
            ex={'Hyperextension'}
            max={set.max}
            comp={set.comp}
            weight={set.weight}
            wkt_date={set.wkt_date}
            username={set.username}
            wkt_num={set.wkt_num}
            length={hypers.length}
            set_id={set.set_id}
            set_num={index}
            incrementRep={this.props.incrementRep}
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
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Squats: 5x5</Text>
              <Text style={styles.largeWords}>{this.props.weights.squatWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderS()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Bench: 5x5</Text>
              <Text style={styles.largeWords}>{this.props.weights.benchWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderP()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Rows: 5x5</Text>
              <Text style={styles.largeWords}>{this.props.weights.aRowWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderAR()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Curls: 3x8</Text>
              <Text style={styles.largeWords}>{this.props.weights.curlWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderI()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Tris: 3x8</Text>
              <Text style={styles.largeWords}>{this.props.weights.triWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderT()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Shrug: 3x8</Text>
              <Text style={styles.largeWords}>{this.props.weights.shrugWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderB()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Cable Crunches: 2x10</Text>
              <Text style={styles.largeWords}>{this.props.weights.crunchWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderC()}
            </View>
          </View>
          <View>
            <View style={styles.exerciseHeader}>
              <Text style={styles.largeWords}>Hyperextensions: 2x10</Text>
              <Text style={styles.largeWords}>{this.props.weights.hyperWeight} lbs.</Text>
            </View>
            <View style={styles.exercise}>
              {this.renderH()}
            </View>
          </View>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  exerciseHeader: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
