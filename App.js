import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {
  createStackNavigator,
} from 'react-navigation';
import { padStart } from 'lodash';

const background = './components/background.jpg';

function PhaseScreen(props) {
  let date = props.navigation.state.params.day.dateString;
  let moonphase = 0;
  if (date.substring(5,7) === "02") {
    moonphase = 31;
  }
  if (date.substring(5,7) === "03") {
    moonphase = 59;
  }
  if (date.substring(5,7) === "04") {
    moonphase = 90;
  }
  if (date.substring(5,7) === "05") {
    moonphase = 120;
  }
  if (date.substring(5,7) === "06") {
    moonphase = 151;
  }
  if (date.substring(5,7) === "07") {
    moonphase = 181;
  }
  if (date.substring(5,7) === "08") {
    moonphase = 212;
  }
  if (date.substring(5,7) === "09") {
    moonphase = 243;
  }
  if (date.substring(5,7) === "10") {
    moonphase = 273;
  }
  if (date.substring(5,7) === "11") {
    moonphase = 304;
  }
  if (date.substring(5,7) === "12") {
    moonphase = 334;
  }
  moonphase = (moonphase + parseInt(date.substring(8,10)))*24 - 23;
  moonphase.toString();
  moonphase = padStart(moonphase, 4, '0');
  moonnumber = ('./components/scripts/moon.' + moonphase + '.jpg').toString();
  alert(moonnumber);
  return (
    <View>
      <Image
          style={{width: '100%', height: '100%'}}
          source={require(moonnumber)}
      />
      <Text>{props.navigation.state.params.day.dateString}</Text>
    </View>
  );
}
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   currentMonth
    // };
  }
  static navigationOptions = { title: 'Phases      ' };
  render() {
    const resizeMode = 'cover';
    const { navigate } = this.props.navigation;
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
        source={require(background)}
      />
      </View>
      <Calendar
        minDate={'2017-01-01'}
        maxDate={'2019-12-30'}
        onDayPress={(day) => navigate('Phase', { day: day })
        }
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

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Phase: { screen: PhaseScreen },
}, { 
  headerMode: 'screen' 
});

export default App;
