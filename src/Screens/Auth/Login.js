import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Images, Colors } from '../../Config';
import { Header } from '../../Components';

const { width, height } = Dimensions.get('window');

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    let { email, password } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: Colors.Teal2 }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
            <Header navigation={this.props.navigation} button={true} />

            <View style={styles.bodyView}>
              <Text style={styles.title}>Registrati aI Club Pampers</Text>

              <Text style={{ textAlign: 'center', paddingTop: 10 }}>
                Usa i tuoi social
              </Text>

              <View style={styles.socialButtonsView}>
                <View style={styles.socialBtnView}>
                  <TouchableOpacity>
                    <Image
                      source={Images.apple_icon}
                      style={styles.socialImg}
                    />
                  </TouchableOpacity>

                  <Text style={{ fontWeight: 'bold' }}>Apple</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={styles.socialBtnView}>
                    <TouchableOpacity>
                      <Image
                        source={Images.facebook_icon}
                        style={styles.socialImg}
                      />
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
                  </View>
                </View>

                <View style={{ flex: 1 }}>
                  <View style={styles.socialBtnView}>
                    <TouchableOpacity>
                      <Image
                        source={Images.google_icon}
                        style={styles.socialImg}
                      />
                    </TouchableOpacity>

                    <Text style={{ fontWeight: 'bold' }}>Google</Text>
                  </View>
                </View>
              </View>

              <View style={styles.oppureView}>
                <View style={styles.bottomLineView} />

                <View style={{ marginHorizontal: 5 }}>
                  <Text>oppure</Text>
                </View>

                <View style={styles.bottomLineView} />
              </View>

              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>E-mail</Text>

                <TextInput
                  placeholder="Inserisci il tuo indirizzo e-mail"
                  placeholderTextColor={Colors.silver}
                  style={styles.input}
                  onChangeText={(email) => this.setState({ email })}
                  value={email}
                />
              </View>

              <View style={[styles.inputView, { marginTop: 10 }]}>
                <Text style={styles.inputTitle}>Password</Text>

                <TextInput
                  placeholder="Inserisci la tua password"
                  placeholderTextColor={Colors.silver}
                  style={styles.input}
                  value={password}
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry={true}
                />
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ForgotPassword')}
                style={styles.forgotPassView}
              >
                <Text style={{ color: Colors.Teal2 }}>
                  Hai dimenticato la password?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('PrivacyPolicy')}
                disabled={!email || !password}
                style={{
                  width: width * 0.8,
                  alignSelf: 'center',
                  backgroundColor:
                    email && password ? Colors.fountain_blue : Colors.silver,
                  borderWidth: 1,
                  borderColor:
                    email && password ? Colors.fountain_blue : Colors.grey,
                  borderRadius: 100,
                  paddingVertical: 15,
                  marginTop: 15,
                }}
              >
                <Text style={styles.procediText}>Accedi</Text>
              </TouchableOpacity>

              <View style={styles.footerView}>
                <Text style={{ fontSize: 16 }}>Non hai un account? </Text>

                <TouchableOpacity>
                  <Text style={{ color: Colors.fountain_blue, fontSize: 16 }}>
                    Registrati
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyView: {
    width: width * 0.9,
    height: height - height * 0.2,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#354953',
  },
  socialButtonsView: {
    height: height * 0.12,
    width: width * 0.7,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  socialBtnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialImg: {
    width: width * 0.15,
    height: height * 0.06,
    resizeMode: 'contain',
  },
  oppureView: {
    flexDirection: 'row',
    width: width * 0.8,
    alignSelf: 'center',
  },
  bottomLineView: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  inputView: {
    width: width * 0.8,
    alignSelf: 'center',
    // paddingVertical: 10,
    marginTop: 15,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#354953',
  },
  input: {
    width: width * 0.8,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 100,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: Colors.grey,
    color: Colors.silver,
    paddingVertical: 10
  },
  forgotPassView: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  procediText: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  },
  footerView: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 15,
  },
});

export default Login;
