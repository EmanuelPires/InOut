import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

export default class Picture extends React.Component {
  state = {
    email: this.props.navigation.getParam('email', 'not the email!'),
    zip: this.props.navigation.getParam('zip', 'NOT THE ZIP'),
    questionOneAnswer: this.props.navigation.getParam(
      'questionOneAnswer',
      'NOT THE ANSWER'
    ),
    questionTwoAnswer: this.props.navigation.getParam(
      'questionTwoAnswer',
      'NOT THE ANSWER'
    ),
    questionThreeAnswer: this.props.navigation.getParam(
      'questionThreeAnswer',
      'NOT THE ANSWER'
    ),
    questionFourAnswer: this.props.navigation.getParam(
      'questionFourAnswer',
      'NOT THE ANSWER'
    ),
    questionFiveAnswer: this.props.navigation.getParam(
      'questionFiveAnswer',
      'NOT THE ANSWER'
    ),
    questionSixAnswer: this.props.navigation.getParam(
      'questionSixAnswer',
      'NOT THE ANSWER'
    )
  };

  componentDidMount() {
    const feedback = {
      email: this.state.email,
      Answer1: this.state.questionOneAnswer,
      Answer2: this.state.questionTwoAnswer,
      Answer3: this.state.questionThreeAnswer,
      Answer4: this.state.questionFourAnswer,
      Answer5: this.state.questionFiveAnswer,
      Answer6: this.state.questionSixAnswer,
      Zipcode: this.state.zip
    };
    console.log('Testing' + feedback);
    return axios.post('http://localhost:3000/feedback/save', feedback);
  }

  render() {
    console.log(this.state);
    const {
      container,
      textHeaderStyle,
      nextButton,
      buttonText,
      topHalf,
      bottomHalf
    } = styles;
    return (
      <View style={container}>
        <View style={topHalf}>
          <Text style={textHeaderStyle}>Take your picture!</Text>
        </View>
        <View style={bottomHalf}>
          <TouchableOpacity
            style={nextButton}
            onPress={() => this.props.navigation.navigate('Description')}
          >
            <Text style={buttonText}>Circle</Text>
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
  }
});
