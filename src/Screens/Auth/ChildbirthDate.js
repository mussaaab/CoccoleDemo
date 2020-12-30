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

export class ChildbirthDate extends Component {
    render() {
        let { type } = this.props.route.params;
        console.warn(type);
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} button={true} />

                <View style={{ flex: 1 }}>

                    {type !== 'login' ? <View style={styles.progressBarView}>
                        <ProgressBar
                            value={0.25}
                            color={Colors.sky_blue}
                            heartColor={Colors.black}
                        />
                    </View> : null}

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Ecco la tua data presunta del parto</Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={styles.text}>Calcolata in base alla data di inizio della tua ultima mestruazione{' '}
                            <Text style={{ fontWeight: 'bold' }}>(01/09/2020)</Text>
                        </Text>
                    </View>

                    <View style={styles.dateView}>
                        <Text style={styles.date}>8 Settembre 2021</Text>
                    </View>

                </View>


                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('Gender', {type})
                        }
                        style={styles.button}>

                        <Text style={styles.confirmText}> Conferma e continua </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.textBtn}>

                        <Text style={styles.text}> Conosco la data di nascita </Text>
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
        width: width * 0.5,
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

export default ChildbirthDate
