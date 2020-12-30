import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    StyleSheet
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
                <Header navigation={this.props.navigation} button={true} />

                <View style={styles.progressBarView}>
                    <ProgressBar value={0.5} color={Colors.sky_blue} heartColor={Colors.black} />
                </View>

                <View style={{ flex: 1 }}>
                    <ScrollView>

                        <View style={styles.titleView}>
                            <Text style={styles.title}>
                                Inserisci i tuoi dati personali
                            </Text>
                        </View>

                        <View style={styles.inputView}>

                            <Text style={styles.inputTitle}>
                                Name
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo nome"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(name) => this.setState({ name })}
                                style={styles.input}
                            />
                        </View>

                        <View style={[styles.inputView, { marginTop: 5 }]}>

                            <Text
                                style={{ fontSize: 18, fontWeight: 'bold', color: '#354953' }}>
                                Cognome
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo cognome"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(Cognome) => this.setState({ Cognome })}
                                style={styles.input}
                            />
                        </View>

                        <View style={[styles.inputView, { marginTop: 5 }]}>

                            <Text style={styles.inputTitle}>
                                CAP
                            </Text>

                            <TextInput
                                placeholder="Inserisci il tuo CAP"
                                placeholderTextColor={Colors.silver}
                                onChangeText={(cap) => this.setState({ cap })}
                                style={styles.input} />
                        </View>

                        <View style={[styles.inputView, { marginTop: 5 }]}>

                            <View style={styles.inputTitleView}>


                                <Text
                                    style={styles.inputTitle}>
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
                                style={styles.input}
                            />
                        </View>

                    </ScrollView>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('BestTripPampers')}
                    disabled={!this.state.active}
                    style={[styles.button, {
                        backgroundColor: this.state.active
                            ? Colors.fountain_blue
                            : Colors.silver,
                    }]}>
                    <Text
                        style={styles.procediText}>
                        Procedi
                    </Text>
                </TouchableOpacity>

            </View>
        )
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
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    inputView: {
        width: width * 0.8,
        alignSelf: 'center',
        paddingVertical: 10,
        marginTop: 15,
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#354953'
    },
    inputTitleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: width * 0.8,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 100,
        paddingLeft: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: Colors.grey,
        color: Colors.silver,
    },
    procediText: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
    },
    button: {
        width: width * 0.8,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 100,
        paddingVertical: 15,
        margin: 10,
    }
})

export default EnterPersonalDetail
