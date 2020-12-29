import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Images } from '../Config';

const { width, height } = Dimensions.get('window');

export const WinPrizes = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.6, justifyContent: 'center' }}>
        <Image source={Images.Onboarding} style={styles.image} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>Carica i codici e vinci tanti premi</Text>
      </View>

      <View style={styles.titleView}>
        <Text style={{ textAlign: 'center' }}>
          Carica i codici che trovi sulla confezione dei prodotti Pampers,
          ottieni punti e vinci tanti bellissimi premi per tutta la famiglia.
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
