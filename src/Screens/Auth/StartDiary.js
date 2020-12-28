import React, { Component } from 'react'
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Header } from '../../Components';
import { Colors } from '../../Config';
import { Checkbox } from 'react-native-paper';

const { width, height } = Dimensions.get('window');

export class StartDiary extends Component {
    state = {
        checked: false,
    };

    Checked = () => {
        let { checked } = this.state;

        if (!checked) {
            this.setState({
                checked: true,
            });
        } else {
            this.setState({
                checked: false,
            });
        }
    };

    render() {
        let { checked } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <ScrollView>
                    <Header navigation={this.props.navigation} button={true} />

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Inizia subito il Diario </Text>
                    </View>

                    <View style={styles.textView}>
                        <Text style={{ textAlign: 'center' }}>
                            Comincia subito a tenere traccia dei piccoli grandi traguardi di:
                        </Text>
                    </View>

                    <View style={styles.bodyView}>
                        <View style={{ width: width * 0.9, height: height * 0.2, backgroundColor: Colors.Teal2, borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, paddingHorizontal: 15, color: Colors.white, fontWeight: 'bold' }}>Emma</Text>
                        </View>
                        <View style={{ width: width * 0.9, height: height * 0.2, backgroundColor: Colors.Teal2, borderRadius: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 22, paddingHorizontal: 15, color: Colors.white, fontWeight: 'bold' }}>Francesca</Text>
                        </View>
                    </View>

                    <View style={styles.termsView}>
                        <TouchableOpacity
                            style={styles.checkboxView}
                            onPress={this.Checked}
                        >
                            <Checkbox
                                color={Colors.Teal2}
                                label="Item"
                                status={!this.state.checked ? 'unchecked' : 'checked'}
                            />
                        </TouchableOpacity>

                        <View style={{ flex: 1 }}>
                            <Text>
                                Acconsento al trattamento dei miei dati sanitari e di quelli del
                                mio bimbo per accedere ai servizi e i contenuti dell'app Coccole
                                Pampers, come da{' '}
                                <Text style={{ fontWeight: 'bold', color: Colors.Teal2 }}>
                                    informativa privacy
                                </Text>
                                .{' '}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.footerView}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('')}
                            disabled={!checked}
                            style={{
                                width: width * 0.8,
                                alignSelf: 'center',
                                backgroundColor: checked ? Colors.fountain_blue : Colors.silver,
                                borderWidth: 1,
                                borderColor: checked ? Colors.fountain_blue : Colors.grey,
                                borderRadius: 100,
                                paddingVertical: 15,
                                marginTop: 15,
                            }}
                        >
                            <Text style={styles.btnText}>Accedi</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.footerText}>
                            <Text style={{ color: Colors.Teal2 }}>
                                Crea il diario in seguito
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleView: {
        width: width * 0.5,
        alignSelf: 'center',
        paddingVertical: 15,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textView: {
        width: width * 0.6,
        alignSelf: 'center',
        alignItems: 'center',
    },
    bodyView: {
        width: width * 0.9,
        height: height * 0.45,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    footerView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
    },
    btnView: {
        height: height * 0.25,
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.white,
    },
    termsView: {
        width: width * 0.9,
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
    },
    checkboxView: {
        width: width * 0.15,
        alignItems: 'center',
    },
    footerText: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
      },
});

export default StartDiary
