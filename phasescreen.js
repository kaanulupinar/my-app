import React from 'react';
import {  FlatList, ActivityIndicator, Text, View, Image, WebView, Alert } from 'react-native';
import { padStart } from 'lodash';
import { Button, Icon } from 'react-native-elements';

export class PhaseScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { infoLoading: true }
  }
  componentDidMount() {
    let date = this.props.navigation.state.params.day.dateString;
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
    this.setState({
      moonSource: moonphase
    })
    return fetch(`https://svs.gsfc.nasa.gov/vis/a000000/a004600/a004604/mooninfo/mooninfo.${moonphase}.js`)
      .then((response) => response.text())
      .then((responseText) => {
        responseText = responseText.substring(responseText.indexOf('"<ta'), responseText.indexOf('</table>') + 9);
        responseText = responseText.replace(/"/gi, '');
        responseText = responseText.replace(/\+/g, '');
        this.setState({
          infoLoading: false,
          dataSource: responseText,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  static navigationOptions = { title: 'Phase    ' };
  render() {
    if(this.state.infoLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      )
    }

    return(
      <View style={{flex:1, backgroundColor: '#847373' }}>
        <Image
          style={{
            alignSelf: 'center',
            height: 400,
            width: '100%',
            borderWidth: 100,
            borderRadius: 75
          }}
          source={{uri: `https://svs.gsfc.nasa.gov/vis/a000000/a004600/a004604/frames/730x730_1x1_30p/moon.${this.state.moonSource}.jpg`}}      
          resizeMode="cover"
      />
        <WebView source={{ html: this.state.dataSource }}  style={{ backgroundColor: '#847373' }}  />
        <Icon
          reverse
          name='ios-information-circle'
          type='ionicon'
          color='#517fa4'
          onPress={() => Alert.alert('About', 'All images and information are courtesy of nasa.gov')}
        />
      </View>
    )
  }
}
