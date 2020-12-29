import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Colors } from '../../Config';

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export class forgotPasswordMsg extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.Teal2 }}>
        <View style={styles.bodyView}>
          <View style={styles.confirmView}>
            <View style={styles.iconView}>
              <FontAwesome name="envelope-o" size={24} color={Colors.white} />
            </View>

            <View style={styles.titleView}>
              <Text style={styles.title}>
                Controlla la tua casella di posta
              </Text>
            </View>

            <View style={{width: width * 0.8}}>
              <Text style={styles.text}>
                A breve riceverai una e-mail con le istruzioni per recuperare la
                tua password.
              </Text>
            </View>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.btnText}>Accedi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {
    flex: 1,
  },
  confirmView: {
    flex: 2,
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconView: {
    width: height * 0.1,
    height: height * 0.1,
    borderRadius: 100,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3cc9cf',
  },
  titleView: {
    width: width * 0.6,
    height: height * 0.15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    paddingVertical: 15,
    color: Colors.white,
    textAlign: 'center',
  },
  btnView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    borderRadius: 100,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10a9ae',
  },
});

export default forgotPasswordMsg;
