import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { Camera, Permissions, Linking } from 'expo';

import axios from 'axios';
export default class picturePreview extends React.Component {
  state = {
    photoURI: {}
  };
  componentDidMount() {
    let photoObject = this.props.navigation.getParam('photo', 'NOT THE URI!');
    this.setState({ photoURI: photoObject });
    console.log('This is the photo object: ' + photoObject.uri);

    return (axios
      .post(
        'https://agile-hollows-10057.herokuapp.com/feedback/tweet',
        photoObject.base64
      )
      .then(function(response) {
        console.log(response);
      }).catch = err => {
      console.log(err);
    });
  }

  render() {
    const {
      container,
      description,
      imageContainer,
      buttonText,
      image
    } = styles;
    return (
      <View style={container}>
        <ImageBackground
          source={{
            uri: this.state.photoURI.uri
          }}
          style={image}
          resizeMode='contain'
        >
          <TouchableOpacity style={description}>
            <Text style={this.tweetSomething}>TWEET YOUR PICTURE!</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'white'
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
  }
});
