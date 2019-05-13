import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

export default class EmailZip extends React.Component {
  state = {
    email: "",
    zipCode: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };

  handleZip = text => {
    this.setState({
      zipCode: text
    });
  };

  submitInfo = () => {
    Alert.alert(this.state.email);
    this.props.navigation.navigate("QuestionOne");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Email Address</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={this.handleEmail}
          value={this.state.email}
        />
        <Text>Zip Code</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Zip Code"
          onChangeText={this.handleZip}
          value={this.state.zip}
          maxLength="5"
        />
        <Button title="Next" onPress={() => this.submitInfo()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin: 15,
    height: 40,
    width: 120,
    borderBottomColor: "#7a42f4"
  }
});
