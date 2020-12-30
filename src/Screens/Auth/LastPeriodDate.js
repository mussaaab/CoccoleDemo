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
import { Calendar } from 'react-native-calendars';
import { Header, ProgressBar } from '../../Components';
import { Images, Colors } from '../../Config';
import { Months } from '../../Config/Api';

const { width, height } = Dimensions.get('window');

export class LastPeriodDate extends Component {
    state = {
        date: null,
        calendar_modal: false,
    };

    render() {
        let date = this.state.date?.split('-');
        let { type } = this.props.route.params;

        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>
                <Header navigation={this.props.navigation} button={true} />
                {type !== 'login' ? <View style={styles.progressBarView}>
                    <ProgressBar
                        value={0.25}
                        color={Colors.sky_blue}
                        heartColor={Colors.black}
                    />
                </View> : null}

                <View style={{ flex: 1 }}>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Inserisci la data di inizio della tua ultima mestruazione</Text>
                    </View>

                    <View style={styles.selectDateView}>

                        <Text style={{ paddingLeft: 15, color: Colors.silver }}>
                            {!this.state.date
                                ? 'Data inizio ultima mestruazione'
                                : `${date[2]} ${Months[date[1]]} ${date[0]}`}
                        </Text>

                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    calendar_modal: true,
                                })
                            }
                            style={styles.calenderBtn}>

                            <Image source={Images.calendar} style={styles.calendarImg} />

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footerView}>
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('ChildbirthDate', { type })
                        }
                        disabled={!this.state.date}
                        style={[styles.button, {
                            backgroundColor: this.state.date
                                ? Colors.fountain_blue
                                : Colors.silver,
                        }]}>

                        <Text style={styles.procediText}> Procedi </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.textBtn}
                        onPress={() =>
                            this.props.navigation.navigate('EnterPersonalDetail')
                        }>

                        <Text style={styles.text}> Conosco la data di nascita </Text>
                    </TouchableOpacity>
                </View>



                {/* Calendar Modal */}
                <Modal visible={this.state.calendar_modal} transparent={true}>
                    <View
                        onTouchEnd={() => this.setState({ calendar_modal: false })}
                        style={styles.calendarModalView}
                    >
                        <View style={{ width: width * 0.9 }}>

                            <Calendar
                                theme={{
                                    backgroundColor: '#ffffff',
                                    calendarBackground: '#ffffff',
                                    arrowColor: Colors.fountain_blue,
                                    selectedDayBackgroundColor: Colors.fountain_blue,
                                    selectedDayTextColor: Colors.white,
                                }}
                                ref={(ref) => (this.calendarRef = ref)}
                                current={new Date()}
                                markedDates={{ [this.state.date]: { selected: true } }}
                                onDayPress={(day) =>
                                    this.setState({ date: day.dateString, calendar_modal: false })
                                }
                                monthFormat={'DD, MM, YYYY'}
                                onMonthChange={(month) => {
                                    console.log('month changed', month);
                                }}
                                firstDay={1}
                                onPressArrowLeft={(subtractMonth) => subtractMonth()}
                                onPressArrowRight={(addMonth) => addMonth()}
                                disableAllTouchEventsForDisabledDays={true}
                                enableSwipeMonths={true}
                                renderHeader={(date) => (
                                    <View>
                                        <Text
                                            style={{
                                                color: Colors.fountain_blue,
                                                fontSize: 18,
                                            }}
                                        >
                                            {Months[new Date(date).getMonth() + 1]}{' '}
                                            {new Date(date).getFullYear()}
                                        </Text>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </Modal>
                {/* xxxx Calendar Modal xxxx */}
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
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    selectDateView: {
        width: width * 0.8,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    calenderBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    calendarImg: {
        width: height * 0.03,
        height: height * 0.03,
        resizeMode: 'contain',
    },
    textBtn: {
        width: width * 0.9,
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center'
    },
    footerView: {
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    procediText: {
        textAlign: 'center',
        color: Colors.white,
        fontWeight: 'bold',
    },
    textBtn: {
        paddingVertical: 15,
        alignSelf: 'center',
    },
    text: {
        color: Colors.Teal2
    },
    calendarModalView: {
        flex: 1,
        backgroundColor: 'rgba(232, 232, 232,0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: width * 0.8,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 100,
        paddingVertical: 15,
        margin: 15,
    }
})

export default LastPeriodDate
