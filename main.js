import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


class App extends React.Component {
  render() {
    const { cardStyle } = styles;
    const dummyImage = require('./puppy_01.jpg');
    return (
      <View style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={cardStyle}>
            <Image source={dummyImage} style={{width: 350, height: 300}}/>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //alignSelf: 'center',
    margin: 20,
  },
  barStyle: {
    flex: 1,
    alignSelf: 'stretch',
    maxHeight: 50,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  childStyle: {
    width: 30,
    height: 30,
    //borderWidth: 2,

  },
});

Exponent.registerRootComponent(App);
