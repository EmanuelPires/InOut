import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight
} from "react-native";

export default class QuestionOne extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the first question for this App?</Text>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              A. I don't know what's happening
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>B. What's going on</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>C. What the hell is going on</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>D. This is the D!</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A2BE2",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "white"
  },
  buttonText: {
    padding: 20,
    color: "black"
  }
});
