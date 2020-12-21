import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { Images, Colors } from '../../Config';
import { Header } from '../../Components';

const { width, height } = Dimensions.get('screen');

export class Register extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.Blue_Chill }}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header navigation={this.props.navigation} />
            <View
              style={{
                width: width * 0.9,
                height: height - height * 0.2,
                backgroundColor: Colors.white,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#354953',
                }}
              >
                Registrati aI Club Pampers
              </Text>
              <Text style={{ textAlign: 'center', paddingTop: 10 }}>
                Usa i tuoi social
              </Text>

              <View
                style={{
                  height: height * 0.12,
                  width: width * 0.7,
                  alignSelf: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      source={Images.apple_icon}
                      style={{
                        width: width * 0.15,
                        height: height * 0.06,
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                  <Text>Apple</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={Images.facebook_icon}
                        style={{
                          width: width * 0.15,
                          height: height * 0.06,
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>

                    <Text>Facebook</Text>
                  </View>
                </View>

                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TouchableOpacity>
                      <Image
                        source={Images.google_icon}
                        style={{
                          width: width * 0.15,
                          height: height * 0.06,
                          resizeMode: 'contain',
                        }}
                      />
                    </TouchableOpacity>

                    <Text>Google</Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.8,
                  alignSelf: 'center',
                }}
              >
                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.grey,
                  }}
                />

                <View style={{ marginHorizontal: 5 }}>
                  <Text>oppure</Text>
                </View>

                <View
                  style={{
                    flex: 1,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.grey,
                  }}
                />
              </View>

              <View
                style={{
                  width: width * 0.8,
                  alignSelf: 'center',
                  paddingVertical: 10,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}
                >
                  E-mail
                </Text>

                <TextInput
                  placeholder="Inserisci il tuo indirizzo e-mail"
                  placeholderTextColor={Colors.silver}
                  style={{
                    width: width * 0.8,
                    alignSelf: 'center',
                    marginTop: 10,
                    borderRadius: 100,
                    paddingLeft: 20,
                    borderWidth: 1,
                    borderColor: Colors.grey,
                    color: Colors.silver,
                  }}
                />
              </View>

              <View
                style={{
                  width: width * 0.8,
                  alignSelf: 'center',
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}
                >
                  Password
                </Text>

                <TextInput
                  placeholder="Inserisci la tua password"
                  placeholderTextColor={Colors.silver}
                  style={{
                    width: width * 0.8,
                    alignSelf: 'center',
                    marginTop: 10,
                    borderRadius: 100,
                    paddingLeft: 20,
                    borderWidth: 1,
                    borderColor: Colors.grey,
                    color: Colors.silver,
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('SelectDateOfBirth')
                }
                style={{
                  width: width * 0.8,
                  alignSelf: 'center',
                  backgroundColor: Colors.silver,
                  borderWidth: 1,
                  borderColor: Colors.grey,
                  borderRadius: 100,
                  paddingVertical: 15,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.white,
                    fontWeight: 'bold',
                  }}
                >
                  Procedi
                </Text>
              </TouchableOpacity>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  backgroundColor: Colors.white,
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 16 }}>Hai già un account? </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      color: Colors.fountain_blue,
                      fontSize: 16,
                    }}
                  >
                    Accedi
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

export default Register;
