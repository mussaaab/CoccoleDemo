import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { Header } from '../../Components/Header';
import { Images, Colors } from '../../Config';

// Icons
import Entypo from 'react-native-vector-icons/Entypo'



const { width, height } = Dimensions.get('window')

export class SelectDateOfBirth extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} />

                <View style={{ flex: 1 }}>
                    <View style={{ width: width * 0.9, flexDirection: 'row', alignSelf: 'center' }}>
                        <ProgressBar styleAttr="Horizontal"
                            indeterminate={false}
                            progress={0.2}
                            color={Colors.Blue_Chill}
                            style={{ width: width * 0.8 }} />

                        <TouchableOpacity style={{ width: height * 0.05, height: height * 0.05, borderRadius: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.sky_blue }}>
                            <Entypo name="heart-outlined" size={20} color={Colors.deep_sea_green} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: width * 0.8, alignSelf: "center", paddingVertical: 15 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Inserisci la data di nascita del tuo bimbo più piccolo o presunta data del parto</Text>
                    </View>

                    <View style={{ width: width * 0.8, borderWidth: 1, borderColor: Colors.grey, borderRadius: 100, alignSelf: "center", flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
                        <Text style={{ paddingLeft: 15, color: Colors.silver }}>Inserisci la data di nascita</Text>

                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 15 }}>
                            <Image source={Images.calendar} style={{ width: height * 0.03, height: height * 0.03, resizeMode: 'contain' }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ width: width * 0.7, marginTop: 20, alignSelf: 'center' }}>
                        <Text style={{ color: Colors.Blue_Chill }}>Non conosci la data presunta del parto?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: 15, alignItems: 'center', justifyContent: 'center' }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("")} style={{ width: width * 0.8, alignSelf: 'center', backgroundColor: Colors.silver, borderWidth: 1, borderColor: Colors.grey, borderRadius: 100, paddingVertical: 15, marginTop: 15 }}>
                        <Text style={{ textAlign: 'center', color: Colors.white, fontWeight: 'bold' }}>Procedi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SelectDateOfBirth
