import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Images, Colors } from '../Config';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

export default Header = ({ navigation, button }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.imgView}>
        <Image source={Images.Pamper_logo} style={styles.img} />

        <Text style={{ color: Colors.deep_sea_green }}>
          Con amore si cambia
        </Text>
      </View>

      <View style={{ flex: 1, position: 'absolute' }}>
        {button == true ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.button}
          >
            <Entypo name="chevron-left" size={32} color={Colors.white} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: width * 0.9,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgView: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: width * 0.4,
    height: height * 0.08,
    resizeMode: 'contain',
  },
  button: {
    width: height * 0.06,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3cc9cf',
    borderRadius: 100,
    elevation: 5,
  },
});
