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

export class DateOfDelivery extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} button={true} />

                <View style={styles.progressBarView}>
                    <ProgressBar
                        value={0.25}
                        color={Colors.sky_blue}
                        heartColor={Colors.black}
                    />
                </View>

                <View style={{ flex: 1 }}>

                    <View style={styles.titleView}>

                        <Text style={styles.title}>
                            Calcola la data presunta del parto
                        </Text>

                        <View style={styles.textView}>
                            <Text style={styles.text}>Quale informazione vuoi inserire per effettuare il calcolo?</Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("LastPeriodDate")}>
                            <Text style={styles.btnText}>Data inizio ultima mestruazione</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("ConceptionDate")}>
                            <Text style={styles.btnText}>Data concepimento</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.footerView}>

                    <TouchableOpacity>
                        <Text style={styles.footerText}>Conosco la data di nascita</Text>
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
        width: width * 0.8,
        alignSelf: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textView: {
        width: width * 0.55,
        alignSelf: 'center',
        marginTop: 20
    },
    text: {
        textAlign: 'center'
    },
    button: {
        width: width * 0.8,
        height: height * 0.06,
        marginTop: 35,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Teal2
    },
    btnText: {
        fontWeight: 'bold',
        color: Colors.white
    },
    footerView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    footerText: {
        padding: 20,
        color: Colors.Teal2
    }
})

export default DateOfDelivery
