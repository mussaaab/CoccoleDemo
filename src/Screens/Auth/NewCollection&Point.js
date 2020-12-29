import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Header } from '../../Components';
import { Colors } from '../../Config';

// Icons
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');

class NewCollectionPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <ScrollView>
          <Header navigation={this.props.navigation} />

          <View style={styles.titleView}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
              Nuova Raccolta, nuovi Punti.
            </Text>
          </View>

          <View style={styles.textView}>
            <Text style={{ textAlign: 'center', paddingTop: 20 }}>
              Da quest’anno sono arrivati i{' '}
              <Text style={{ fontWeight: 'bold' }}>Punti Coccole</Text>: più
              punti raccogli, più premi ottieni!
            </Text>

            <Text style={{ textAlign: 'center', paddingTop: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                Iniziamo subito... con il piedino giusto!{' '}
              </Text>{' '}
              I punti che non hai utilizzato nella scorsa Raccolta Punti si
              trasferiscono nella Raccolta Punti 2021 con un nuovo valore:
            </Text>
          </View>

          <View style={styles.title2View}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              Il tuo nuovo saldo
            </Text>
          </View>

          <View style={styles.balanceView}>
            <View style={styles.numView}>
              <Text style={styles.number}>50</Text>

              <Entypo name="heart-outlined" size={45} color={Colors.yellow} />
            </View>

            <Text style={styles.text}>punti coccole</Text>
          </View>

          <View style={styles.numIconView}>
            <View style={styles.numIcon}>
              <Text style={styles.numberText}>100</Text>

              <Entypo name="heart-outlined" size={26} color={Colors.yellow} />
            </View>

            <View style={{ flex: 0.5, alignItems: 'center' }}>
              <Entypo name="chevron-right" size={26} color={Colors.Teal2} />
            </View>

            <View style={styles.numIcon}>
              <Text style={styles.numberText}>50</Text>

              <Entypo name="heart-outlined" size={26} color={Colors.yellow} />
            </View>
          </View>

          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate()}
              style={styles.button}
            >
              <Text style={styles.btnText}>Continua</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    width: width * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
  },
  textView: {
    width: width * 0.75,
    alignSelf: 'center',
    alignItems: 'center',
  },
  title2View: {
    width: width * 0.6,
    alignSelf: 'center',
    paddingVertical: 20,
    alignItems: 'center',
  },
  balanceView: {
    width: width * 0.8,
    height: height * 0.2,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.sky_blue,
    borderRadius: 12,
  },
  numView: {
    width: width * 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 52,
    fontWeight: 'bold',
    color: Colors.Teal2,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Teal2,
  },
  numIconView: {
    width: width * 0.6,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  numIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.Teal2,
    paddingHorizontal: 10,
  },
  btnView: {
    height: height * 0.2,
    justifyContent: 'flex-end',
  },
  button: {
    width: width * 0.8,
    alignSelf: 'center',
    borderRadius: 100,
    paddingVertical: 15,
    marginTop: 15,
    backgroundColor: Colors.Teal2,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.white,
  },
});

export default NewCollectionPoint;
