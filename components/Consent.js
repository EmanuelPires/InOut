import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Consent extends React.Component {
  render() {
    const { container, description, smallText, buttonText, logo } = styles;
    return (
      <View style={container}>
        <Image source={require('../assets/INOUT_logo-14.png')} style={logo} />
        <View style={description}>
          <Text style={smallText} />
          <Text style={smallText}>
            I hereby authorize the artist team Epigram and ARTSFAIRFAX, to use
            the photos and/or video footage, whether visual only or audio also,
            in which I (or the child/minor for whom I am legally responsible)
            appear in part or entirety, alone or with other subjects, for any
            legal purpose and any media (book, press, video, film, internet,
            artwork, etc.), whether or not as part of Imagine Art Here: INOUT
            Project. I confirm that I understand the nature of the project and
            hereby assign all of my rights to use any photographic portraits and
            audio and/or visual media of myself (or the minor I represent) to
            the organizers of the INOUT project, which are ARTSFAIRFAX and
            Epigram, including the rights of ARTSFAIRFAX to create derivative
            works thereof, and to use the works and any derivation from them in
            connection with related merchandising, advertising, promotion and/or
            any other lawful commercial and/or non-commercial purposes
            whatsoever. This assignment is made free of charge, for the world
            and for the duration of my intellectual property rights.
          </Text>
        </View>
        <TouchableOpacity
          title='I accept the terms.'
          onPress={() => this.props.navigation.navigate('EmailZip')}
        >
          <Text style={buttonText}>I accept terms and conditions</Text>
        </TouchableOpacity>
      </View>
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
  container: {
    flex: 1,
    backgroundColor: '#8A2BE2',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  description: {
    marginTop: 0,
    marginBottom: 20,
    marginRight: 100,
    marginLeft: 100
  },
  logo: {
    width: 175,
    height: 35
  }
});
