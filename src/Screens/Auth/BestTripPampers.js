import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Header, ProgressBar } from '../../Components';
import { Colors, Images } from '../../Config';

const { width, height } = Dimensions.get('window');

export class BestTripPampers extends Component {
  state = {
    not_accept: false,
    accept: false,
    not_accept2: false,
    accept2: false,
    active: false,
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header navigation={this.props.navigation} />

        <View style={styles.progressBarView}>
          <ProgressBar
            value={0.75}
            color={Colors.sky_blue}
            heartColor={Colors.black}
          />
        </View>

        <ScrollView>
          <View style={styles.titleView}>

            <Text style={styles.title}>
              Vivi con Pampers il viaggio più bello
            </Text>

          </View>

          <View style={{ width: width * 0.9, alignSelf: 'center' }}>
            <Image
              source={Images.family_img}
              style={styles.image}
            />
          </View>

          <View style={styles.titleView}>

            <Text style={[styles.title, { fontSize: 16 }]}>
              Resta aggiornato sul mondo Pampers
            </Text>

          </View>

          <View style={styles.detailTextView}>

            <Text style={{ textAlign: 'center' }}>
              Scegli di ricevere informazioni su prodotti, novità e iniziative
              Pampers e permettici di svolgere ricerche di mercato, come da{' '}

              <Text style={{ fontWeight: 'bold', color: Colors.fountain_blue }}>
                informativa privacy
              </Text>

              . In qualsiasi momento potrai modificare la tua preferenza.
            </Text>
          </View>

          <View style={styles.radioBtnView}>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  not_accept: true,
                  accept: false,
                  active: false,
                })
              }
              style={{
                width: height * 0.18,
                height: height * 0.07,
                alignItems: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: this.state.not_accept
                  ? Colors.fountain_blue
                  : Colors.grey,
                borderRadius: 100,
                backgroundColor: this.state.not_accept
                  ? Colors.sky_blue
                  : Colors.white,
                flexDirection: 'row',
              }}
            >
              <RadioButton
                value={this.state.not_accept}
                status={this.state.not_accept ? 'checked' : 'unchecked'}
                onPress={() =>
                  this.setState({
                    not_accept: true,
                    accept: false,
                    active: false,
                  })
                }
              />

              <Text
                style={{
                  fontWeight: this.state.not_accept ? 'bold' : 'normal',
                  color: this.state.not_accept
                    ? Colors.fountain_blue
                    : Colors.black,
                }}
              >
                Non accetto
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({ accept: true, not_accept: false })}
              style={{
                width: height * 0.18,
                height: height * 0.07,
                alignItems: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: this.state.accept
                  ? Colors.fountain_blue
                  : Colors.grey,
                borderRadius: 100,
                backgroundColor: this.state.accept
                  ? Colors.sky_blue
                  : Colors.white,
                flexDirection: 'row',
              }}
            >
              <RadioButton
                value={this.state.accept}
                status={this.state.accept ? 'checked' : 'unchecked'}
                onPress={() =>
                  this.setState({ accept: true, not_accept: false })
                }
              />

              <Text
                style={{
                  fontWeight: this.state.accept ? 'bold' : 'normal',
                  color: this.state.accept
                    ? Colors.fountain_blue
                    : Colors.black,
                }}
              >
                Accetto
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.titleView}>

            <Text style={[styles.title, { fontSize: 16 }]}>
              Vivi il tuo viaggio personalizzato con Pampers
            </Text>

          </View>

          <View style={styles.detailTextView}>

            <Text style={{ textAlign: 'center' }}>
              Per noi è importante conoscere i tuoi interessi. In questo modo
              potremmo fornirti prodotti e servizi sulla base delle tue
              preferenze e inviarti comunicazioni e promozioni in linea con il
              tuo profilo sia in app che in altri contesti web, come da{' '}

              <Text style={{ fontWeight: 'bold', color: Colors.fountain_blue }}>
                informativa privacy
              </Text>

              . In qualsiasi momento potrai modificare la tua preferenza.
            </Text>
          </View>

          <View style={styles.radioBtnView}>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  not_accept2: true,
                  accept2: false,
                  active: false,
                });
              }}
              style={{
                width: height * 0.18,
                height: height * 0.07,
                alignItems: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: this.state.not_accept2
                  ? Colors.fountain_blue
                  : Colors.grey,
                borderRadius: 100,
                backgroundColor: this.state.not_accept2
                  ? Colors.sky_blue
                  : Colors.white,
                flexDirection: 'row',
              }}
            >
              <RadioButton
                value={this.state.not_accept2}
                status={this.state.not_accept2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({
                    not_accept2: true,
                    accept2: false,
                    active: false,
                  });
                }}
              />

              <Text
                style={{
                  fontWeight: this.state.not_accept2 ? 'bold' : 'normal',
                  color: this.state.not_accept2
                    ? Colors.fountain_blue
                    : Colors.black,
                }}
              >
                Non accetto
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  accept2: true,
                  not_accept2: false,
                  active: true,
                });
              }}
              style={{
                width: height * 0.18,
                height: height * 0.07,
                alignItems: 'center',
                padding: 5,
                borderWidth: 1,
                borderColor: this.state.accept2
                  ? Colors.fountain_blue
                  : Colors.grey,
                borderRadius: 100,
                backgroundColor: this.state.accept2
                  ? Colors.sky_blue
                  : Colors.white,
                flexDirection: 'row',
              }}
            >
              <RadioButton
                value={this.state.accept2}
                status={this.state.accept2 ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({
                    accept2: true,
                    not_accept2: false,
                    active: true,
                  });
                }}
              />

              <Text
                style={{
                  fontWeight: this.state.accept2 ? 'bold' : 'normal',
                  color: this.state.accept2
                    ? Colors.fountain_blue
                    : Colors.black,
                }}
              >
                Accetto
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('JoinFamily')}
            disabled={!this.state.active}
            style={{
              width: width * 0.8,
              alignSelf: 'center',
              backgroundColor: this.state.active
                ? Colors.fountain_blue
                : Colors.silver,
              borderWidth: 1,
              borderColor: Colors.grey,
              borderRadius: 100,
              paddingVertical: 15,
              margin: 10,
            }}
          >

            <Text style={styles.procediText}>
              Procedi
            </Text>

          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  progressBarView: {
    width: width * 0.9,
    alignSelf: 'center',
  },
  titleView: {
    width: width * 0.8,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  image: {
    width: height * 0.45,
    height: height * 0.35,
    resizeMode: 'contain',
  },
  detailTextView: {
    width: width * 0.9,
    alignSelf: 'center',
    paddingVertical: 5,
  },
  radioBtnView: {
    width: width * 0.8,
    alignSelf: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  procediText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  }
})

export default BestTripPampers;
