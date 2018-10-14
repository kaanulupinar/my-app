import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {
  createStackNavigator,
} from 'react-navigation';
import { padStart } from 'lodash';
import { PhaseScreen } from './phasescreen';

const background = './components/background.jpg';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { title: `What's the moon?      ` };
  render() {
    const resizeMode = 'cover';
    const { navigate } = this.props.navigation;
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
        minDate={'2018-01-01'}
        maxDate={'2018-12-30'}
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
          todayTextColor: 'cyan',
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
