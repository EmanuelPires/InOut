import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Description from './components/Description';
import Consent from './components/Consent';
import EmailZip from './components/EmailZip';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';
import QuestionFour from './components/QuestionFour';
import QuestionFive from './components/QuestionFive';
import QuestionSix from './components/QuestionSix';
import takePicture from './components/takePicture';
import picturePreview from './components/picturePreview';

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
    },
    QuestionTwo: {
      screen: QuestionTwo
    },
    QuestionThree: {
      screen: QuestionThree
    },
    QuestionFour: {
      screen: QuestionFour
    },
    QuestionFive: {
      screen: QuestionFive
    },
    QuestionSix: {
      screen: QuestionSix
    },
    takePicture: {
      screen: takePicture
    },
    picturePreview: {
      screen: picturePreview
    }
  },
  {
    initialRouteName: 'takePicture'
  }
);

export default createAppContainer(RootStack);
