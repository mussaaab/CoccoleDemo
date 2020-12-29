import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { Colors } from '../../Config'

const { width, height } = Dimensions.get('window');

export class ForgotPassword extends Component {
    state = {
        email: '',
    };
    render() {
        let { email } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} button={true} />


                <View style={styles.titleView}>
                    <Text style={styles.title}>Reimposta password</Text>
                </View>

                <View style={styles.textView}>
                    <Text style={styles.text}>Inserisci il tuo indirizzo e-mail e ti invieremo le istruzioni per reimpostare la password
                    </Text>
                </View>

                <View style={styles.inputView}>

                    <Text
                        style={styles.inputTitle}>
                        E-mail
                    </Text>

                    <TextInput
                        placeholder="Inserisci il tuo indirizzo e-mail"
                        placeholderTextColor={Colors.silver}
                        style={styles.input}
                        onChangeText={(email) => this.setState({ email })}
                        value={email}
                    />
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("forgotPasswordMsg")}
                        disabled={!email}
                        style={{
                            width: width * 0.8,
                            alignSelf: 'center',
                            backgroundColor:
                                email ? Colors.fountain_blue : Colors.silver,
                            borderWidth: 1,
                            borderColor:
                                email ? Colors.fountain_blue : Colors.grey,
                            borderRadius: 100,
                            paddingVertical: 15,
                            marginVertical: 15
                        }}>
                        <Text style={styles.procediText}>
                            Accedi
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        width: width * 0.6,
        alignSelf: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textView: {
        width: width * 0.8,
        alignSelf: 'center',
        marginTop: 5
    },
    text: {
        textAlign: 'center'
    },
    inputView: {
        width: width * 0.8,
        alignSelf: 'center',
        // paddingVertical: 10,
        marginTop: 20,
    },
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#354953'
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
    procediText: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
    },
})

export default ForgotPassword
