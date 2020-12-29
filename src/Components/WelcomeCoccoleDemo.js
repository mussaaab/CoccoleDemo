import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Images } from '../Config';

const { width, height } = Dimensions.get('window');

export const WelcomeCoccoleDemo = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.6, justifyContent: 'center' }}>
        <Image source={Images.giftBoxes} style={styles.image} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>
          Ti diamo il benvenuto in Coccole Pampers
        </Text>
      </View>

      <View style={styles.titleView}>
        <Text style={{ textAlign: 'center' }}>
          Entra nel mondo Pampers: partecipa alla Raccolta Punti e segui la
          crescita del tuo bambino fin dalla gravidanza, con tanti strumenti
          utili e consigli per ogni momento.
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
