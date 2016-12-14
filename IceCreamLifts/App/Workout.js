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

  renderS(weight) {
    console.log('yo', this.props)
    const squats = this.props.currentSets.filter((set) => {
      return set.ex === 'S'
    });
    return squats.map((set, index) => {
      return(
        <View key={index}>
          <Text>Squats</Text>
          <Text>{weight}</Text>
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            set_id={set.set_id}
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
            <Text>Squat</Text>
            <Text>{this.props.weights.squatWeight}</Text>
            <View style={styles.exercise}>
              {this.renderS()}
            </View>
          </View>
          <View>
            <Text>Bench</Text>
            <Text>{this.props.weights.benchWeight}</Text>
            <View style={styles.exercise}>
              {this.renderP()}
            </View>
          </View>
          <View>
            <Text>Rows</Text>
            <Text>{this.props.weights.aRowWeight}</Text>
            <View style={styles.exercise}>
              {this.renderAR()}
            </View>
          </View>
          <View>
            <Text>Curls</Text>
            <Text>{this.props.weights.curlWeight}</Text>
            <View style={styles.exercise}>
              {this.renderI()}
            </View>
          </View>
          <View>
            <Text>Tris</Text>
            <Text>{this.props.weights.triWeight}</Text>
            <View style={styles.exercise}>
              {this.renderT()}
            </View>
          </View>
          <View>
            <Text>Shrugs</Text>
            <Text>{this.props.weights.shrugWeight}</Text>
            <View style={styles.exercise}>
              {this.renderB()}
            </View>
          </View>
          <View>
            <Text>Crunches</Text>
            <Text>{this.props.weights.crunchWeight}</Text>
            <View style={styles.exercise}>
              {this.renderC()}
            </View>
          </View>
          <View>
            <Text>Hyper</Text>
            <Text>{this.props.weights.HyperWeight}</Text>
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
    height: 150,
  }
})
