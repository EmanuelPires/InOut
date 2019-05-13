import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import Description from "./components/Description";
import Consent from "./components/Consent";
import EmailZip from "./components/EmailZip";
import QuestionOne from "./components/QuestionOne";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Description: {
      screen: Description
    },
    Consent: {
      screen: Consent
    },
    EmailZip: {
      screen: EmailZip
    },
    QuestionOne: {
      screen: QuestionOne
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(RootStack);
