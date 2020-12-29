import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Images } from '../Config';

const { width, height } = Dimensions.get('window');

export const TakePart = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.6, justifyContent: 'center' }}>
        <Image source={Images.Onboarding2} style={styles.image} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>
          Partecipa alle missioni e guadagna punti extra
        </Text>
      </View>

      <View style={styles.titleView}>
        <Text style={{ textAlign: 'center' }}>
          Divertiti a guadagnare punti extra partecipando alle missioni: ancora
          più punti per te!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 1,
    height: height * 0.5,
    resizeMode: 'contain',
  },
  titleView: {
    width: width * 0.75,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
