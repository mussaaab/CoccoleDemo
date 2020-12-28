import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import { Colors, Images } from '../../Config'

const { width, height } = Dimensions.get('window');

export class TipsAndNews extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <View style={styles.imgBodyView}>
                    <View style={styles.imgView}>
                        <Image source={Images.bell} style={styles.image} />
                    </View>
                </View>


                <View style={styles.footerView}>
                    <View style={{ width: width * 0.5, }}>
                        <Text style={styles.title}>Ricevi tanti consigli e novità</Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={{ textAlign: 'center' }}>Dando il consenso alle notifiche non perderai neanche una Missione della Raccolta Punti e potrai ricevere consigli personalizzati... sempre al momento giusto!</Text>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('CustomizeExperience')}
                        >
                            <Text style={styles.btnText}>Procedi</Text>
                        </TouchableOpacity>
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
        width: width * 0.8,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button: {
        width: width * 0.8,
        height: height * 0.07,
        borderRadius: 100,
        backgroundColor: Colors.Teal2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
      },
      btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
      },
})

export default TipsAndNews
