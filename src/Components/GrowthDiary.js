import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,

} from 'react-native';
import { Colors, Images } from '../Config';

const { width, height } = Dimensions.get('window');

export const GrowthDiary = ({ navigation }) => {

  // const [isLogin, setIsLogin] = useState(false)

  // Next = () => {

  //   if (!isLogin) {
  //     setIsLogin(isLogin = true)
  //     console.warn(isLogin)
  //   }
  // }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.55, justifyContent: 'center' }}>
        <Image source={Images.senza} style={styles.image} />
      </View>

      <View style={styles.titleView}>
        <Text style={styles.title}>“Il Diario della crescita”</Text>
      </View>

      <View style={styles.titleView}>
        <Text style={{ textAlign: 'center' }}>
          Ti accompagniamo nei momenti più belli della crescita del tuo bimbo,
          fin dalla gravidanza, con tanti strumenti utili e consigli.
        </Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterOrLogin")} style={styles.button}>
          <Text style={styles.btnText}>Iniziamo!</Text>
        </TouchableOpacity>
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
    width: width * 0.8,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btnView: {
    height: height * 0.2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    width: width * 0.7,
    height: height * 0.07,
    justifyContent: 'center',
    backgroundColor: Colors.Teal2,
    borderRadius: 100,
  },
  btnText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  },
});



//