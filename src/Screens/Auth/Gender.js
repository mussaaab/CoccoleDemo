import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Header } from '../../Components';
import { Colors } from '../../Config';

const { width, height } = Dimensions.get('window');

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header navigation={this.props.navigation} button={true} />

        <View style={{ flex: 1 }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Inserisci il sesso del tuo bambino</Text>
          </View>

          <View style={styles.textView}>
            <Text style={{ textAlign: 'center' }}>
              Se hai dei gemelli potrai creare altri profili in seguito.
            </Text>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Maschio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddLater')}
              style={[styles.button, { marginTop: 15 }]}
            >
              <Text style={styles.btnText}>Femmina</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DiaryReady")}
          >
            <Text style={{ textAlign: 'center', color: Colors.Teal2 }}>
              Non lo so ancora
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Abandoning')}
          >
            <Text style={{ color: Colors.Teal2 }}>
              Crea il diario in seguito
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    width: width * 0.4,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textView: {
    width: width * 0.55,
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.8,
    alignSelf: 'center',
    backgroundColor: Colors.Teal2,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 100,
    paddingVertical: 15,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
  btnView: {
    height: height * 0.25,
    justifyContent: 'center',
  },
  footerView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
});

export default Gender;
