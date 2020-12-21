import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView
} from 'react-native'
import { Header, ProgressBar } from '../../Components';
import { Colors } from '../../Config';

const { width, height } = Dimensions.get('window');

export class EnterPersonalDetail extends Component {

    state = {
        active: false,
        name: '',
        cognome: '',
        cap: '',
        cellulare: ''
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} />

                <View
                    style={{
                        width: width * 0.9,
                        alignSelf: 'center',
                    }}
                >
                    <ProgressBar value={0.5} color={Colors.sky_blue} heartColor={Colors.black} />
                </View>

                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View
                            style={{
                                width: width * 0.8,
                                alignSelf: 'center',
                                paddingVertical: 10,
                            }}>
                            <Text
                                style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
                                Inserisci i tuoi dati personali
                        </Text>
                        </View>

                        <View
                            style={{
                                width: width * 0.8,
                                alignSelf: 'center',
                                paddingVertical: 10,
                                marginTop: 15,
                            }}>

                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}>
                                Name
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo nome"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(name) => this.setState({ name })}
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
                                marginTop: 5,
                            }}>

                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}>
                                Cognome
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo cognome"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(Cognome) => this.setState({ Cognome })}
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
                                marginTop: 5,
                            }}>

                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}>
                                CAP
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo CAP"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(cap) => this.setState({ cap })}
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
                                marginTop: 5,
                            }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


                                <Text
                                    style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}>
                                    Cellulare
                                </Text>

                                <Text style={{ fontSize: 12 }}>
                                    Facoltativo
                                </Text>
                            </View>

                            <TextInput
                                placeholder="Inserisci il tuo numero di cellulare"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(cellulare) => this.setState({ cellulare, active: true })}
                                keyboardType="number-pad"
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

                    </ScrollView>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('BestTripPampers')}
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
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.white,
                            fontWeight: 'bold',
                        }}>
                        Procedi
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

export default EnterPersonalDetail
