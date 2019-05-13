import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Description extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello From Description! This will show a description of this project
          to users
        </Text>
        <Button
          title="Consent"
          onPress={() => this.props.navigation.navigate("Consent")}
        />
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
  }
});
