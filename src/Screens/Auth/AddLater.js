import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { Header } from '../../Components';
import { Colors } from '../../Config';

const { width, height } = Dimensions.get('window');

class AddLater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    let { name } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header navigation={this.props.navigation} button={true} />

        <View style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.titleView}>
              <Text style={styles.title}>
                Inserisci il nome del tuo bambino
              </Text>
            </View>

            <View style={styles.textView}>
              <Text style={{ textAlign: 'center' }}>
                Se non hai ancora deciso, potrai aggiungerlo in seguito.
              </Text>
            </View>

            <View style={{ height: height * 0.2, justifyContent: 'center' }}>
              <TextInput
                placeholder="Inserisci il nome"
                placeholderTextColor={Colors.silver}
                style={styles.input}
                onChangeText={(name) => this.setState({ name })}
                value={name}
              />

              <TouchableOpacity style={{ marginTop: 15 }} onPress={() => this.props.navigation.navigate('DiaryReady')}>
                <Text style={{ textAlign: 'center', color: Colors.Teal2 }}>
                  Non ho ancora deciso
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity
            disabled={!name}
            style={[styles.button, {
              backgroundColor: name ? Colors.fountain_blue : Colors.silver,
              borderColor: name ? Colors.fountain_blue : Colors.grey,
            }]}
          >
            <Text style={styles.btnText}>Crea il diario</Text>
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
  input: {
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 100,
    paddingLeft: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    color: Colors.silver,
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
  btnText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  },
  button: {
    width: width * 0.8,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 100,
    paddingVertical: 15,
    marginTop: 15,
  }
});

export default AddLater;
