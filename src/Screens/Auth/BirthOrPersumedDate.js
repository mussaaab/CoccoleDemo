import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Header } from '../../Components';
import { Images, Colors } from '../../Config';
import { Months } from '../../Config/Api';

const { width, height } = Dimensions.get('window');

export class BirthOrPersumedDate extends Component {
  state = {
    date: null,
    calendar_modal: false,
  };
  render() {
    let date = this.state.date?.split('-');
    return (
      <View style={{ flex: 1, backgroundColor: Colors.white }}>
        <Header navigation={this.props.navigation} button={true} />

        <View style={{ flex: 1 }}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Inserisci la data di nascita o presunta data del parto
            </Text>
          </View>

          <View style={styles.textView}>
            <Text style={{ textAlign: 'center' }}>
              Inserici la data del bambino a cui vuoi dedicare il Diario.
              Servirà per seguire le tappe fondamentali della sua crescita.
            </Text>
          </View>

          <View style={styles.selectDateView}>
            <Text style={{ paddingLeft: 15, color: Colors.silver }}>
              {!this.state.date
                ? 'Data di nascita'
                : `${date[2]} ${Months[date[1]]} ${date[0]}`}
            </Text>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  calendar_modal: true,
                })
              }
              style={styles.calenderBtn}
            >
              <Image source={Images.calendar} style={styles.calendarImg} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.textBtn}
            onPress={() => this.props.navigation.navigate('DateOfDelivery')}
          >
            <Text style={{ color: Colors.Teal2 }}>
              Non conosci la data presunta del parto?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerView}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Gender')
            }
            disabled={!this.state.date}
            style={{
              width: width * 0.8,
              alignSelf: 'center',
              backgroundColor: this.state.date
                ? Colors.fountain_blue
                : Colors.silver,
              borderWidth: 1,
              borderColor: Colors.grey,
              borderRadius: 100,
              paddingVertical: 15,
              margin: 15,
            }}
          >
            <Text style={styles.procediText}>Procedi</Text>
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
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    width: width * 0.7,
    alignSelf: 'center',
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textView: {
    width: width * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
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
    marginTop: 20,
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
    alignItems: 'center',
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
    color: Colors.Teal2,
  },
  calendarModalView: {
    flex: 1,
    backgroundColor: 'rgba(232, 232, 232,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BirthOrPersumedDate;
