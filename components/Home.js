import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello From HomeScreen!</Text>
        <Button
          title="Description"
          onPress={() => this.props.navigation.navigate("Description")}
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
