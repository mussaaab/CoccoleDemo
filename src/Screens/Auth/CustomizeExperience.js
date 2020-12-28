import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Colors, Images } from '../../Config'

// icons
import AntDesign from "react-native-vector-icons/AntDesign"

const { width, height } = Dimensions.get('window');

export class CustomizeExperience extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.imgBodyView}>
                    <View style={styles.imgView}>
                        <AntDesign name="mobile1" size={100} color={Colors.Teal2} />
                    </View>
                </View>


                <View style={styles.footerView}>
                    <View style={{ width: width * 0.5, }}>
                        <Text style={styles.title}>Personalizza la tua esperienza</Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={{ textAlign: 'center' }}>Utilizza cookie e fingerprinting per ottimizzare le campagne pubblicitarie di Pampers e offrirti la migliore esperienza.</Text>
                    </View>

                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <View style={styles.btnView}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('')}
                            >
                                <Text style={styles.btnText}>No</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.props.navigation.navigate('StartDiary')}
                            >
                                <Text style={styles.btnText}>
                                    Si
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imgBodyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgView: {
        width: height * 0.25,
        height: height * 0.25,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: Colors.purple2
    },
    image: {
        width: height * 0.15,
        height: height * 0.15,
        resizeMode: 'contain',
        tintColor: Colors.Teal2
    },
    footerView: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textView: {
        width: width * 0.75,
        paddingVertical: 20
    },
    btnView: {
        width: width * 0.85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    button: {
        width: width * 0.4,
        height: height * 0.07,
        borderRadius: 100,
        backgroundColor: Colors.Teal2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    },
})

export default CustomizeExperience
