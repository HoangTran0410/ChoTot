import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppIntroSlider from 'react-native-app-intro-slider';

import HomeScreen from '../screens/HomeScreen';

const slides = [
  {
    key: 'something',

    title: 'Title 1',
    titleStyle: {},

    text: 'Description.\nSay something cool',
    textStyle: {},

    image: require('../assets/images/robot-prod.png'),
    imageStyle: {},

    backgroundColor: '#59b2ab',
  },
  {
    key: 'something-dos',

    title: 'Title 2',
    titleStyle: {},

    text: 'Other cool stuff',
    textStyle: {},

    image: require('../assets/images/robot-dev.png'),
    imageStyle: {},

    backgroundColor: '#febe29',
  },
  {
    key: 'something1',

    title: 'Rocket guy',
    titleStyle: {},

    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    textStyle: {},

    image: require('../assets/images/icon.png'),
    imageStyle: {},

    backgroundColor: '#22bcb5',
  }
];

export default class IntroScreen extends Component {

  state = {
    showRealApp: false
  }

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  render() {
    if (this.state.showRealApp) {
      return <HomeScreen />;
    } else {
      return <AppIntroSlider
        slides={slides}
        showSkipButton={true}
        onDone={this._onDone}

        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />;
    }
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})