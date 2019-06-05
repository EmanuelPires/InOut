import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  sm
} from 'react-native';
import axios from 'axios';

export default class ThankYouOne extends React.Component {
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
    return axios.post(
      'https://agile-hollows-10057.herokuapp.com/feedback/save',
      feedback
    );
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
        <View style={description}>
          <Text style={smallText}>Thank you!</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('takePicture')}
        >
          <Text style={buttonText}>Take a Pic</Text>
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
