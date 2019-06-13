import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { LinearGradient } from 'expo';

export default class QuestionFour extends React.Component {
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
    )
  };
  render() {
    const { navigation } = this.props;

    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>
            When would you like to see art?
          </Text>
        </View>
        <View style={styles.questionGroup}>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionFive', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: this.state.questionTwoAnswer,
                questionThreeAnswer: this.state.questionThreeAnswer,
                questionFourAnswer: 'Any Chance I Get'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>A. ANY CHANCE I GET</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionFive', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: this.state.questionTwoAnswer,
                questionThreeAnswer: this.state.questionThreeAnswer,
                questionFourAnswer: 'On Weekends'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>B. ON WEEKENDS</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionFive', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: this.state.questionTwoAnswer,
                questionThreeAnswer: this.state.questionThreeAnswer,
                questionFourAnswer: 'When I least Expect'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>C. WHEN I LEAST EXPECT</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionFive', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: this.state.questionTwoAnswer,
                questionThreeAnswer: this.state.questionThreeAnswer,
                questionFourAnswer: 'At Night'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>D. AT NIGHT</Text>
            </View>
          </TouchableHighlight>
        </View>
      </LinearGradient>
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
  button: {
    marginBottom: 30,
    width: 520,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 30
  },
  questionText: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center'
  },
  description: {
    margin: 20,
    height: 150,
    marginTop: 90
  },
  questionGroup: {
    marginBottom: 100
  }
});
