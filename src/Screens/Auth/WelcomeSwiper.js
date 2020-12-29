import React, { Component } from 'react';
import { View, Text, StyleSheet,  } from 'react-native';

import Swiper from 'react-native-swiper';
import {
  WelcomeCoccoleDemo,
  WinPrizes,
  TakePart,
  GrowthDiary,
} from '../../Components';
import { Colors } from '../../Config';

class WelcomeSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        dotColor="red"
        dotStyle={{ backgroundColor: Colors.purple2 }}
        activeDotColor={Colors.dark_purple2}
        loop={false}
      >
        <View style={styles.slide1}>
          <WelcomeCoccoleDemo />
        </View>

        <View style={styles.slide2}>
          <WinPrizes />
        </View>

        <View style={styles.slide3}>
          <TakePart />
        </View>

        <View style={styles.slide4}>
          <GrowthDiary navigation={this.props.navigation} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default WelcomeSwiper;
