import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class ThankYouTwo extends React.Component {
  componentDidMount() {
    // let photoObject = this.props.navigation.getParam('photo', 'NOT THE URI!');
    // return (axios
    //   .post(
    //     'https://agile-hollows-10057.herokuapp.com/feedback/tweet',
    //     photoObject
    //   )
    //   .then(function() {
    //     console.log('tweeted!');
    //   }).catch = err => {
    //   console.log('Error: ' + err);
    // });
  }
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={buttonText}>Thank You!</Text>
        </TouchableOpacity>
      </View>
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
