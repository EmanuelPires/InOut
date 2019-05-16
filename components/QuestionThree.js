import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import ReactNavigation from 'react-navigation';

export default class QuestionThree extends React.Component {
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
    )
  };
  render() {
    console.log(this.state);
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>
            What art activities do you enjoy?
          </Text>
        </View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('QuestionFour', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: 'Art Galleries/Museums'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>A. ART GALLERIES/MUSEUMS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('QuestionFour', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: 'Public Art Installations'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>B. PUBLIC ART INSTALLATIONS</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('QuestionFour', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: 'Performances/Concerts'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>C. WORKING</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate('QuestionFour', {
              email: this.state.email,
              zip: this.state.zip,
              questionOneAnswer: this.state.questionOneAnswer,
              questionTwoAnswer: this.state.questionTwoAnswer,
              questionThreeAnswer: 'Interactive Activities'
            })
          }
          underlayColor='white'
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>D. INTERACTIVE ACTIVITIES</Text>
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
