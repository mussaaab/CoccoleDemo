import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../Config';

const { width, height } = Dimensions.get('window');

export default ProgressBar = ({ value }) => {
  return (
    <View
      style={{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Progress.Bar
        progress={value}
        borderWidth={0}
        color={Colors.fountain_blue}
        unfilledColor={Colors.sky_blue}
        width={width * 0.8}
      
      />

      <TouchableOpacity
        style={{
          width: height * 0.05,
          height: height * 0.05,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.sky_blue,
        }}
      >
        <Entypo name="heart-outlined" size={20} color={Colors.deep_sea_green} />
      </TouchableOpacity>
    </View>
  );
};
