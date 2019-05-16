import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from 'react-native';
import ReactNavigation from 'react-navigation';

export default class QuestionOne extends React.Component {
  state = {
    email: this.props.navigation.getParam('email', 'not the email!'),
    zip: this.props.navigation.getParam('zip', 'NOT THE ZIP')
  };

  render() {
    console.log(this.state.email);
    console.log(this.state.zip);

    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.questionText}>Where is home to you?</Text>
        </View>
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
