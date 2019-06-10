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

  render() {
    const {
      container,
      smallText,
      input,
      buttonText,
      topHalf,
      logo,
      bottomHalf
    } = styles;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={container}>
          <View style={topHalf}>
            <Text style={buttonText}>Tell us a little bit about you...</Text>
          </View>
          <TextInput
            style={input}
            keyboardType='email-address'
            placeholder='Email'
            onChangeText={this.handleEmail}
            value={this.state.email}
            color='black'
            fontSize='30'
          />

          <TextInput
            style={input}
            keyboardType='numeric'
            placeholder='Zip Code'
            onChangeText={this.handleZip}
            value={this.state.zip}
            color='black'
            maxLength={5}
            fontSize='30'
          />

          <View style={bottomHalf}>
            <TouchableOpacity onPress={() => this.submitInfo()}>
              <Text style={buttonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    justifyContent: 'center',
    textAlign: 'center'
  },
  input: {
    margin: 15,
    height: 80,
    width: 520,
    borderBottomColor: '#7a42f4',
    backgroundColor: 'white',
    textAlign: 'center',
    marginTop: 20,
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
  }
});
