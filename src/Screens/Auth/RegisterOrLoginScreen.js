import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Colors } from '../../Config'


const { width, height } = Dimensions.get('window')

export class RegisterOrLoginScreen extends Component {
    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.HeaderView}>
                    <Image source={Images.Pamper_logo} style={styles.logo} />

                    <Text style={styles.text}>Con amore si cambia</Text>
                </View>

                <View style={styles.bodyView}>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>Entra nel Club Pampers</Text>

                    <View style={styles.descView}>
                        <Text style={styles.descText}>Potrai utilizzare l’app Coccole Pampers, partecipare alla Raccolta Punti e ricevere tante offerte esclusive.</Text>
                    </View>

                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.registerBtn} onPress={() => this.props.navigation.navigate("Register")}>
                            <Text style={{ color: Colors.Blue_Chill, fontWeight: 'bold' }}>Registrati</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.registerBtn, { backgroundColor: Colors.Blue_Chill, borderWidth: 1, borderColor: Colors.white }]}>
                            <Text style={{ color: Colors.white, fontWeight: 'bold' }}>Accedi</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={{ color: Colors.white }}>Preferisco accedere più tardi</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.Blue_Chill
    },
    HeaderView: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    logo: {
        width: width * 0.5,
        height: height * 0.12,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 20,
        color: Colors.white
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    descView: {
        width: width * 0.8,
        alignSelf: 'center',
        // alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 15,
        // backgroundColor: 'green'
    },
    descText: {
        textAlign: 'center',
        color: Colors.white,
    },
    buttonsView: {
        width: width * 0.9,
        height: height * 0.18,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    registerBtn: {
        alignItems: 'center',
        width: width * 0.8,
        paddingVertical: 13,
        borderRadius: 100,
        backgroundColor: Colors.white
    },
    footer: {
        paddingVertical: 20,
        alignItems: 'center'
    }
})

export default RegisterOrLoginScreen
