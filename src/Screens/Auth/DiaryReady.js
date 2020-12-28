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

class DiaryReady extends Component {
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
            <Text style={styles.title}>Il tuo Diario è pronto!</Text>
          </View>

          <View style={styles.textView}>
            <Text style={{ textAlign: 'center' }}>
              Potrai inserire i dati del tuo bambino che ancora non conosci in
              qualsiasi momento.
            </Text>
          </View>
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Ottimo')}
            style={styles.button}
          >
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              Crea il diario
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Abandoning')}
            style={{ paddingVertical: 15 }}
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
    width: width * 0.5,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textView: {
    width: width * 0.8,
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

export default DiaryReady;
