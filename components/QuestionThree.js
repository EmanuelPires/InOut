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

  start = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    console.log(this.state);
    const { navigation } = this.props;

    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>
            What art activities do you enjoy?
          </Text>
        </View>
        <View style={styles.questionGroup}>
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
              <Text style={styles.buttonText}>C. PERFORMANCES/CONCERTS</Text>
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
    marginTop: 90,
    textAlign: 'center'
  },
  questionGroup: {
    marginBottom: 100
  }
});
