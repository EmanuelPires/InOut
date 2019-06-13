import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

export default class ThankYouTwo extends React.Component {
  componentDidMount() {
    setTimeout(this.end, 3000);
  }

  end = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    const {
      container,
      textHeaderStyle,
      buttonText,
      smallText,
      description
    } = styles;
    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={buttonText}>Thank You!</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 60,
    color: 'white'
  },
  smallText: {
    fontSize: 15,
    color: 'white'
  },
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
  description: {
    margin: 20
  }
});
