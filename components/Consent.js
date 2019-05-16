import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Consent extends React.Component {
  render() {
    const { container, description, smallText, buttonText } = styles;
    return (
      <View style={container}>
        <View style={description}>
          <Text style={smallText}>Hello From Consent!</Text>
          <Text style={smallText}>
            You will need to accept a bunch of rules here. Like that you won't
            sue us and that you won't complain about your picture. You'll have
            to make sure to be happy with the answers that you put down as well.
          </Text>
        </View>
        <TouchableOpacity
          title='I accept the terms.'
          onPress={() => this.props.navigation.navigate('EmailZip')}
        >
          <Text style={buttonText}>I ACCEPT TERMS AND CONDITIONS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
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
  description: {
    margin: 20
  }
});
