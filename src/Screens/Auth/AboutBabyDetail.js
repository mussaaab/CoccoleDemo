import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    StyleSheet
} from 'react-native';
import { Header, ProgressBar } from '../../Components';
import { Colors } from '../../Config';


const { width, height } = Dimensions.get('window');

export class AboutBabyDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} button={true} />

                <View style={{ flex: 1 }}>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Dicci di più sul tuo bambino!</Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={{textAlign: 'center'}}>È questa la data di nascita o presunto parto del bambino a cui vuoi dedicare il Diario? Hai inserito questa data durante la fase di registrazione al Club Pampers:
                        </Text>
                    </View>

                    <View style={styles.dateView}>
                        <Text style={styles.date}>8 Settembre 2021</Text>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("BirthOrPersumedDate")} style={styles.changeDateBtn}>
                        <Text style={styles.date}>Modifica la data</Text>
                    </TouchableOpacity>

                </View>


                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('EnterPersonalDetail')
                        }
                        style={styles.button}>

                        <Text style={styles.confirmText}> Procedi </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>

                        <Text style={styles.text}> Crea il diario in seguito </Text>
                    </TouchableOpacity>
                </View>

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
        width: width * 0.7,
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
    dateView: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: Colors.sky_blue,
        width: width * 0.8,
        borderRadius: 100,
        paddingVertical: 15,
        marginVertical: 30,
    },
    date: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.Teal2
    },
    footerView: {
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: width * 0.8,
        alignSelf: 'center',
        borderRadius: 100,
        paddingVertical: 15,
        margin: 15,
        backgroundColor: Colors.Teal2
    },
    confirmText: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
    },
    textBtn: {
        paddingVertical: 15,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        color: Colors.Teal2
    },
})

export default AboutBabyDetail
