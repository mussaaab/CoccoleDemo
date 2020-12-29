import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { Images, Colors } from '../Config';

const { width, height } = Dimensions.get('window');

export class SplashLoading extends Component {
  componentDidMount() {
    // Some API here then navigate to either Home or Register screen

    setTimeout(() => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: 'WelcomeSwiper',
            },
          ],
        }),
      );
    }, 3000);
    
  }

  render() {
    return (
      <View style={styles.MainView}>
        <Image source={Images.Pamper_logo} style={styles.logo} />

        <Text style={styles.text}>Con amore si cambia</Text>

        <View style={styles.loadingView}>
          <ActivityIndicator size="small" color="#8e51a5" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.5,
    height: height * 0.1,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    color: Colors.deep_sea_green,
  },
  loadingView: {
    marginVertical: 15,
  },
});

export default SplashLoading;
