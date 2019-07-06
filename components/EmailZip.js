import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { LinearGradient } from 'expo';

export default class EmailZip extends React.Component {
  state = {
    email: '',
    zipCode: ''
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handleZip = text => {
    this.setState({
      zipCode: text
    });
  };

  submitInfo = () => {
    //Alert.alert(this.state.email);
    this.props.navigation.navigate('QuestionOne', {
      email: this.state.email,
      zip: this.state.zipCode
    });
  };

  start = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const {
      container,
      smallText,
      input,
      buttonText,
      topHalf,
      logo,
      bottomHalf,
      largeText,
      next
    } = styles;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          colors={['#9c00e4', '#ff3803']}
          style={styles.container}
        >
          <View style={topHalf}>
            <Text style={largeText}>Tell us a little bit about you...</Text>
          </View>
          <TextInput
            style={input}
            placeholderTextColor='white'
            keyboardType='email-address'
            placeholder='Email (optional)'
            onChangeText={this.handleEmail}
            value={this.state.email}
            color='white'
            fontSize='30'
          />

          <TextInput
            style={input}
            placeholderTextColor='white'
            keyboardType='numeric'
            placeholder='Zip Code (optional)'
            onChangeText={this.handleZip}
            value={this.state.zip}
            color='white'
            maxLength={5}
            fontSize='30'
          />

          <View style={bottomHalf}>
            <TouchableOpacity onPress={() => this.submitInfo()} style={next}>
              <Text style={buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: 'white'
  },
  largeText: {
    fontSize: 60,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    margin: 15,
    height: 80,
    width: 520,

    borderBottomWidth: 1,
    borderBottomColor: 'white',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  topHalf: {
    justifyContent: 'flex-start',
    marginBottom: 100
  },
  bottomHalf: {
    marginTop: 100
  },
  logo: {
    width: 175,
    height: 35
  },
  next: {
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  }
});
