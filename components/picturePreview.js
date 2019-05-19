import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import ReactNavigation from 'react-navigation';
import { Camera, Permissions } from 'expo';

export default class picturePreview extends React.Component {
  state = {
    photoURI: ''
  };
  componentDidMount() {
    let photoURI = this.props.navigation.getParam('photo', 'NOT THE URI!');
    this.setState({ photoURI: photoURI });
    console.log('This is the photo URI: ');
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
            uri: this.props.navigation.getParam('photo', 'NOT THE URI!')
          }}
          style={image}
          resizeMode='contain'
        >
          <TouchableOpacity style={description}>
            <Text style={buttonText}>TWEET YOUR PICTURE!</Text>
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
