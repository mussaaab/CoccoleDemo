import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Header } from '../../Components';
import { Colors } from '../../Config';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

class Abandoning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.Teal2 }}>
        <Header />

        <View style={styles.bodyView}>
          <View style={styles.confirmView}>
            <View style={styles.iconView}>
              <AntDesign name="exclamation" size={30} color={Colors.white} />
            </View>

            <View style={styles.textView}>
              <Text style={styles.title}>
                Stai abbandonando la creazione del Diario
              </Text>

              <View style={{ marginTop: 15 }}>
                <Text style={styles.text}>
                  Interrompendo la creazione del Diario perderai i dati inseriti
                  fino ad ora.
                </Text>

                <Text style={styles.text}>
                  Ricordati che potrai creare il Diario in qualsiasi momento.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => this.props.navigation.navigate('')}
            >
              <Text style={styles.btnText}>Continua a creare il Diario</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => this.props.navigation.navigate('LoyalityDiary')}>
              <Text style={{ color: Colors.white, textAlign: 'center' }}>
                Abbandona
              </Text>
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
  textView: {
    width: width * 0.8,
    paddingVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
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

export default Abandoning;
