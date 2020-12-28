import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Colors, Images } from '../../Config';
import { Checkbox } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export class PrivacyPolicy extends Component {
  state = {
    checked: false,
  };

  Checked = () => {
    let { checked } = this.state;

    if (!checked) {
      this.setState({
        checked: true,
      });
    } else {
      this.setState({
        checked: false,
      });
    }
  };

  render() {
    let { checked } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header navigation={this.props.navigation} />

        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.bodyView}>
            <Text style={styles.title}> Inizia subito il Diario </Text>
          </View>

          <View style={styles.detailView}>
            <Text style={{ textAlign: 'center' }}>
              Dalla dolce attesa alla nascita, la prima pappa, i primi passi.
              Crea il Diario del tuo bimbo e scopri un modo di contenuti e
              funzionalità per seguire tutti i vostri progressi.
            </Text>
          </View>

          <Image source={Images.visual} style={styles.img} />

          <View style={styles.termsView}>
            <TouchableOpacity
              style={styles.checkboxView}
              onPress={this.Checked}
            >
              <Checkbox
                color={Colors.Teal2}
                label="Item"
                status={!this.state.checked ? 'unchecked' : 'checked'}
              />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <Text>
                Acconsento al trattamento dei miei dati sanitari e di quelli del
                mio bimbo per accedere ai servizi e i contenuti dell'app Coccole
                Pampers, come da{' '}
                <Text style={{ fontWeight: 'bold', color: Colors.Teal2 }}>
                  informativa privacy
                </Text>
                .{' '}
              </Text>
            </View>
          </View>

          <View style={styles.footerView}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AboutBabyDetail')}
              disabled={!checked}
              style={{
                width: width * 0.8,
                alignSelf: 'center',
                backgroundColor: checked ? Colors.fountain_blue : Colors.silver,
                borderWidth: 1,
                borderColor: checked ? Colors.fountain_blue : Colors.grey,
                borderRadius: 100,
                paddingVertical: 15,
                marginTop: 15,
              }}
            >
              <Text style={styles.procediText}>Accedi</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.footerText}>
              <Text style={{ color: Colors.Teal2 }}>
                Crea il diario in seguito
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
    backgroundColor: Colors.white,
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#354953',
  },
  detailView: {
    width: width * 0.8,
    alignSelf: 'center',
    paddingVertical: 10,
  },
  img: {
    width: width * 0.9,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  termsView: {
    width: width * 0.8,
    flexDirection: 'row',
    marginTop: 15,
  },
  checkboxView: {
    width: width * 0.15,
    alignItems: 'center',
  },
  footerView: {
    width: width * 0.9,
    flex: 1,
  },
  procediText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  },
  footerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrivacyPolicy;
