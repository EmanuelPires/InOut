import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { ImageManipulator, LinearGradient } from 'expo';

import axios from 'axios';
export default class picturePreview extends React.Component {
  state = {
    photoURI: {}
  };
  componentDidMount() {
    console.log('picture Previouw Mounted');
    let photoObject = this.props.navigation.getParam('photo', 'NOT THE URI!');
    this.setState({ photoURI: photoObject });
  }

  tweet() {
    let photoObject = this.props.navigation.getParam('photo', 'NOT THE URI!');
    console.log('Photo Object from picture Preview:' + photoObject.uri);
    return axios
      .post(
        'https://agile-hollows-10057.herokuapp.com/feedback/tweet',
        photoObject
        // this.state.photoURI.base64
      )
      .then(this.sendTweet());
  }

  sendTweet = () => {
    this.props.navigation.navigate('ThankYouTwo');
  };

  render() {
    const { container, buttonSection, button, image } = styles;
    return (
      <View style={container}>
        <ImageBackground
          source={{
            uri: this.state.photoURI.uri
          }}
          style={image}
          resizeMode='contain'
        >
          <View style={buttonSection}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('takePicture')}
            >
              <LinearGradient colors={['#9c00e4', '#ff3803']} style={button}>
                <Text style={styles.buttonText}>Retake</Text>
              </LinearGradient>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => this.tweet()}>
              <LinearGradient colors={['#9c00e4', '#ff3803']} style={button}>
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: 'white',
    padding: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  description: {
    marginBottom: 40
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20
  },
  buttonSection: {
    marginBottom: 100,

    flexDirection: 'row'
  }
});
