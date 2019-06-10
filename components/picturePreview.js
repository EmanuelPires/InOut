import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { ImageManipulator } from 'expo';

import axios from 'axios';
export default class picturePreview extends React.Component {
  state = {
    photoURI: {}
  };
  componentDidMount() {
    console.log('picture Previouw Mounted');
    let photoObject = this.props.navigation.getParam('photo', 'NOT THE URI!');
    this.setState({ photoURI: photoObject });

    // console.log(
    //   'This is the photo base64 string: ' + JSON.stringify(photoObject.base64)
    // );
    // console.log('*******************************************');
    // console.log('This is the photo base64 object: ' + photoObject.base64);

    //this.sendToBackEnd();

    // this.resizePhoto();
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
    const {
      container,
      description,
      imageContainer,
      buttonText,
      button,
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
          <TouchableHighlight style={button} onPress={() => this.tweet()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={button}
            onPress={() => this.props.navigation.navigate('takePicture')}
          >
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: '#8A2BE2',
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
    backgroundColor: 'white'
  }
});
