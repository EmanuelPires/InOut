import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import { LinearGradient } from 'expo';

export default class Description extends React.Component {
  start = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    const {
      container,
      textHeaderStyle,
      buttonText,
      smallText,
      description,
      next,
      logo
    } = styles;
    return (
      <LinearGradient colors={['#9c00e4', '#ff3803']} style={container}>
        <Image source={require('../assets/INOUT_logo-14.png')} style={logo} />
        <View style={description}>
          <Text style={smallText}>
            Imagine Art Here projects are temporary public art installations
            that: Raise awareness for the potential of public art in the
            community, gather feedback from the community on the role of arts
            and allow the public to interact and become part of a public art
            project. The INOUT project engages the public by asking questions
            about the future of art in Springfield. Epigram artists interactive
            photo booth, called a cuboid, will collect community responses and
            portraits displayed at locations throughout Springfield. The Epigram
            interactive cuboids allow the Springfield community to be part of
            the art.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Consent')}
          style={next}
        >
          <Text style={buttonText}>Next</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: 'white'
  },
  smallText: {
    fontSize: 30,
    color: 'white'
  },
  largeText: {
    fontSize: 30,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textHeaderStyle: {
    fontSize: 50,
    color: 'white'
  },
  description: {
    marginTop: 0,
    marginBottom: 20,
    marginRight: 100,
    marginLeft: 100
  },
  logo: {
    width: 350,
    height: 70
  },
  next: {
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  }
});
