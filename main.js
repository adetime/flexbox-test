import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';


class App extends React.Component {
  render() {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    Alert.alert(`Device, width: ${width}, height: ${height}`)




    const { cardStyle, imageStyle } = styles;
    const dummyImage = require('./puppy_01.jpg');
    return (

        <View style={{flex:1}}>
          <View style={cardStyle}>
            <Image
              resizeMode="cover"
              source={dummyImage} style={imageStyle}/>
            <Text>justifyContent: flex-start</Text>
            <BarWithIcons />

            <Text>justifyContent: flex-end</Text>
            <BarWithIcons style={{justifyContent: 'flex-end'}}/>

            <Text>justifyContent: center</Text>
            <BarWithIcons style={{justifyContent: 'center'}}/>

            <Text>justifyContent: space-between</Text>
            <BarWithIcons style={{justifyContent: 'space-between'}}/>

            <Text>justifyContent: space-around</Text>
            <BarWithIcons style={{justifyContent: 'space-around'}}/>
          </View>
        </View>

    );
  }
}

const BarWithIcons = (props) => {
  const { barStyle, childStyle } = styles;

  return (
    <View style={[barStyle, props.style]}>
      <View style={[childStyle, {backgroundColor: 'red'}]}/>
      <View style={[childStyle, {backgroundColor: 'green'}]}/>
      <View style={[childStyle, {backgroundColor: 'blue'}]}/>
      <View style={[childStyle, {backgroundColor: 'black'}]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#fff',
    //alignItems: 'stretch',
    //justifyContent: 'center',
    //alignSelf: 'center',
    margin: 20,

  },
  barStyle: {
    //flex: 1,
    //alignSelf: 'stretch',
    //height: 50,
    padding: 5,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  childStyle: {
    width: 30,
    height: 30,
  },
  imageStyle: {
    //resizeMode: 'contain',
    width: Dimensions.get('window').width - 40,

  },
});

Exponent.registerRootComponent(App);
