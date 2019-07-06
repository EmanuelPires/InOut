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

export default class QuestionTwo extends React.Component {
  state = {
    email: this.props.navigation.getParam('email', 'not the email!'),
    zip: this.props.navigation.getParam('zip', 'NOT THE ZIP'),
    questionOneAnswer: this.props.navigation.getParam(
      'questionOneAnswer',
      'NOT THE ANSWER'
    )
  };

  start = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    console.log(this.state);
    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>
            What is your role in the Springfield community?
          </Text>
        </View>
        <View style={styles.questionGroup}>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionThree', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: 'Seeking Culture'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>A. SEEKING CULTURE</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionThree', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: 'Dining/Shopping'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>B. DINING/SHOPPING</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionThree', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: 'Working'
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
              this.props.navigation.navigate('QuestionThree', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: this.state.questionOneAnswer,
                questionTwoAnswer: 'Residing'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>D. RESIDING</Text>
            </View>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    margin: 20,
    height: 150,
    marginTop: 90,
    textAlign: 'center'
  },
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
  questionGroup: {
    marginBottom: 100
  }
});
