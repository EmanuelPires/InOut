import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  sm
} from 'react-native';

export default class Description extends React.Component {
  render() {
    const {
      container,
      textHeaderStyle,
      buttonText,
      smallText,
      description
    } = styles;
    return (
      <View style={container}>
        <View style={description}>
          <Text style={smallText}>
            Hello From Description! This will show a description of this project
            to users
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Consent')}
        >
          <Text style={buttonText}>Next</Text>
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
  textHeaderStyle: {
    fontSize: 50,
    color: 'white'
  },
  description: {
    margin: 20
  }
});
