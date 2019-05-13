import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Consent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello From Consent!</Text>
        <Text>
          You will need to accept a bunch of rules here. Like that you won't sue
          us and that you won't complain about your picture. You'll have to make
          sure to be happy with the answers that you put down as well.
        </Text>
        <Button
          title="I accept the terms."
          onPress={() => this.props.navigation.navigate("EmailZip")}
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
