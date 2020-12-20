import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Images, Colors } from '../Config'

// Icons
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

export const Header = ({navigation}) => {
    return (
        // <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center' }}>

                <View style={{ height: height * 0.2, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.Pamper_logo} style={{
                        width: width * 0.4,
                        height: height * 0.08,
                        resizeMode: 'contain',
                        // backgroundColor: 'pink'
                    }} />
                    <Text style={{ color: Colors.deep_sea_green}}>Con amore si cambia</Text>
                </View>

                <View style={{ flex: 1, position: 'absolute', marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: height * 0.07, height: height * 0.07, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3cc9cf', borderRadius: 100, elevation: 5 }}>
                        <Entypo name="chevron-left" size={32} color={Colors.white} />
                    </TouchableOpacity>
                </View>

            </View>

        // </View>
    )
}