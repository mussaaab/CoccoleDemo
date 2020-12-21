import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Images, Colors } from '../Config';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

export default Header = ({ navigation }) => {
  return (
    // <View style={{ flex: 1 }}>
    <View
      style={{
        width: width * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          height: height * 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={Images.Pamper_logo}
          style={{
            width: width * 0.4,
            height: height * 0.08,
            resizeMode: 'contain',
          }}
        />
        <Text style={{ color: Colors.deep_sea_green }}>
          Con amore si cambia
        </Text>
      </View>

      <View style={{ flex: 1, position: 'absolute' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: height * 0.06,
            height: height * 0.06,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3cc9cf',
            borderRadius: 100,
            elevation: 5,
          }}
        >
          <Entypo name="chevron-left" size={32} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
