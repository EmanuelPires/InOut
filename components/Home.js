import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class Home extends React.Component {
  render() {
    const {
      container,
      textHeaderStyle,
      nextButton,
      buttonText,
      topHalf,
      bottomHalf,
      logo
    } = styles;
    return (
      <View style={container}>
        <View style={topHalf}>
          <Image source={require('../assets/INOUT_logo-14.png')} style={logo} />
        </View>
        <View style={bottomHalf}>
          <TouchableOpacity
            style={nextButton}
            onPress={() => this.props.navigation.navigate('Description')}
          >
            <Text style={buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textHeaderStyle: {
    fontSize: 50,
    color: 'white'
  },
  nextButton: {
    marginTop: 20
  },
  buttonText: {
    fontSize: 30,
    color: 'white'
  },
  topHalf: {
    justifyContent: 'flex-start'
  },
  bottomHalf: {
    justifyContent: 'flex-start'
  },
  logo: {
    width: 350,
    height: 70
  }
});
