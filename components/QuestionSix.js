import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import ReactNavigation from 'react-navigation';

export default class QuestionSix extends React.Component {
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
    )
  };
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>Who should fund art?</Text>
        </View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('ThankYouOne', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: this.state.questionThreeAnswer,
              questionFourAnswer: this.state.questionFourAnswer,
              questionFiveAnswer: this.state.questionFiveAnswer,
              questionSixAnswer: 'Government'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>A. GOVERNMENT</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('takePicture', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: this.state.questionThreeAnswer,
              questionFourAnswer: this.state.questionFourAnswer,
              questionFiveAnswer: this.state.questionFiveAnswer,
              questionSixAnswer: 'Corporate Groups'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>B. CORPORATE GROUPS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('takePicture', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: this.state.questionThreeAnswer,
              questionFourAnswer: this.state.questionFourAnswer,
              questionFiveAnswer: this.state.questionFiveAnswer,
              questionSixAnswer: '50/50 Private/Public'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>C. 50/50 PRIVATE/PUBLIC</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('takePicture', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: this.state.questionThreeAnswer,
              questionFourAnswer: this.state.questionFourAnswer,
              questionFiveAnswer: this.state.questionFiveAnswer,
              questionSixAnswer: 'Consumers'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>D. CONSUMERS</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonText: {
    padding: 20,
    color: 'black'
  },
  questionText: {
    fontSize: 25,
    color: 'white'
  },
  description: {
    margin: 20
  }
});
