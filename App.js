import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const background = 'https://media.wired.com/photos/5b7f64cbbe2f8d3a624b77b2/master/pass/SPoW_82318_01.jpg'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentMonth
    // };
  }
  render() {
    const resizeMode = 'cover';
    // const handleDayChange = () => {

    // }
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
        <Image
          style={{
            flex: 1,
            resizeMode,
          }}
          source={{uri: background}}
        />
        </View>
        <Calendar
          minDate={'2017-01-01'}
          maxDate={'2019-12-30'}
          onDayPress={(day) => {alert(day.dateString)}}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: '50%',
            width: '100%'
          }}
          theme={{
            calendarBackground: 'rgba(26, 0, 26, 0.7)',
            textSectionTitleColor: 'white',
            dayTextColor: 'red',
            todayTextColor: 'white',
            selectedDayTextColor: 'white',
            monthTextColor: 'white',
            selectedDayBackgroundColor: '#333248',
            arrowColor: 'white',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
