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

export default class QuestionOne extends React.Component {
  state = {
    email: this.props.navigation.getParam('email', 'not the email!'),
    zip: this.props.navigation.getParam('zip', 'NOT THE ZIP')
  };

  render() {
    console.log(this.state.email);
    console.log(this.state.zip);

    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>Where is home to you?</Text>
        </View>
        <View style={styles.questionGroup}>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionTwo', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: 'Fairfax County'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>A. FAIRFAX COUNTY</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionTwo', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: 'Family & Friends'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>B. FAMILY AND FRIENDS</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionTwo', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: 'Where I Grew Up'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>C. WHERE I GREW UP</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('QuestionTwo', {
                email: this.state.email,
                zip: this.state.zip,
                questionOneAnswer: 'Where I Am'
              })
            }
            underlayColor='white'
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>D. WHERE I AM</Text>
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
    height: 150,
    textAlign: 'center',
    marginTop: 90
  },
  topHalf: {
    justifyContent: 'flex-start',
    marginBottom: 500
  },
  questionContainer: {
    justifyContent: 'center'
  },
  questionGroup: {
    marginBottom: 100
  }
});
