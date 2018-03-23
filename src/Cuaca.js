import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Cuaca extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&appid=2a43005dc0d70507f488354a13e18345&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }
  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', color: 'white', padding: 17, fontSize: 17 }} > Prakiraan Cuaca </Text>
      </View>
      
      <View style={styles.box2}>
          <View style={{marginTop:20, marginLeft: 20, marginRight: 20, padding: 10, backgroundColor:'white'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({ city })}
            />
          </View>
          <View style={{marginTop:10, marginLeft: 20, marginRight: 20, padding: 1, backgroundColor:'white'}}>
            <Button
              onPress={
                () => this.getWeather()
              }

              title="Lihat"
              accessibilityLabel="Klik untuk melihat"
              
            />
          </View>
      </View>

      <View style={styles.box3}>
        <View>
          <Text style = {{padding: 10, fontSize: 20}} >
              {this.state.city} {"\n"}
              Suhu{'\t'}{'\t'}: {this.state.forecast.temp} {"\n"}
              Cuaca{'\t'}{'\t'}: {this.state.forecast.main} {"\n"}
              Deskripsi{'\t'}: {this.state.forecast.description}
          </Text>
         </View>
      </View>

      <View style={styles.box1}>
          <Text style={{ textAlign: 'center', color: 'white', padding: 12, fontSize: 17 }} > copyright @widhi adnyani </Text>
      </View>
      
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#BBDEFB',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.15,
    backgroundColor: 'pink',
  },
  box2: {
    flex: 0.5,
    backgroundColor: 'pink',
    margin: 10
  },
  box3: {
    flex: 1,
    backgroundColor: '#90CAF9',
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#90CAF9',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});