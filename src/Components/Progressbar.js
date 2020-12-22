import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet, Button } from 'react-native';
import * as Progress from 'react-native-progress';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../Config';

const { width, height } = Dimensions.get('window');

export default ProgressBar = ({ value, color, heartColor }) => {
  return (
    <View style={styles.mainView}>

      <Progress.Bar
        progress={value}
        borderWidth={0}
        color={Colors.fountain_blue}
        unfilledColor={Colors.sky_blue}
        width={width * 0.8}

      />

      <TouchableOpacity style={[styles.button, { backgroundColor: color, }]} >
        <Entypo name="heart-outlined" size={20} color={heartColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: width * 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',

  }
})
