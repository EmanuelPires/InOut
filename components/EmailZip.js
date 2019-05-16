import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  TouchableOpacity
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
    const { container, smallText, input, buttonText } = styles;
    return (
      <View style={container}>
        <Text style={smallText}>Email Address</Text>
        <TextInput
          style={input}
          keyboardType='email-address'
          placeholder='Email'
          onChangeText={this.handleEmail}
          value={this.state.email}
          color='white'
        />
        <Text style={smallText}>Zip Code</Text>
        <TextInput
          style={input}
          keyboardType='numeric'
          placeholder='Zip Code'
          onChangeText={this.handleZip}
          value={this.state.zip}
          color='white'
          maxLength={5}
        />
        <TouchableOpacity onPress={() => this.submitInfo()}>
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
    justifyContent: 'center'
  },
  input: {
    margin: 15,
    height: 40,
    width: 120,
    borderBottomColor: '#7a42f4'
  }
});
