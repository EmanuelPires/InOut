import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import { Camera, Permissions, ImageManipulator } from 'expo';

export default class Picture extends React.Component {
  state = {
    image: {},
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    email: this.props.navigation.getParam('email', 'not the email!'),
    zip: this.props.navigation.getParam('zip', 'NOT THE ZIP'),
    questionOneAnswer: this.props.navigation.getParam(
      'questionOneAnswer',
      'NOT THE ANSWER'
    ),
    questionTwoAnswer: this.props.navigation.getParam(
      'questionTwoAnswer',
      'NOT THE ANSWER'
    ),
    questionThreeAnswer: this.props.navigation.getParam(
      'questionThreeAnswer',
      'NOT THE ANSWER'
    ),
    questionFourAnswer: this.props.navigation.getParam(
      'questionFourAnswer',
      'NOT THE ANSWER'
    ),
    questionFiveAnswer: this.props.navigation.getParam(
      'questionFiveAnswer',
      'NOT THE ANSWER'
    ),
    questionSixAnswer: this.props.navigation.getParam(
      'questionSixAnswer',
      'NOT THE ANSWER'
    )
  };

  componentDidMount() {
    const feedback = {
      email: this.state.email,
      Answer1: this.state.questionOneAnswer,
      Answer2: this.state.questionTwoAnswer,
      Answer3: this.state.questionThreeAnswer,
      Answer4: this.state.questionFourAnswer,
      Answer5: this.state.questionFiveAnswer,
      Answer6: this.state.questionSixAnswer,
      Zipcode: this.state.zip
    };
    console.log('Testing' + feedback);
    return axios.post(
      'https://agile-hollows-10057.herokuapp.com/feedback/save',
      feedback
    );
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  //Attempting to resize the image

  // async resizePhoto() {
  //   let URI = this.state.image.uri;
  //   const manipResult = await ImageManipulator.manipulateAsync(
  //     URI,
  //     { resize: { height: 640 } },
  //     { format: 'jpeg', base64: true }
  //   );
  //   console.log(manipResult);
  //   this.setState({ image: manipResult });
  // }

  processImage = async imageURI => {
    let processedImage = await ImageManipulator.manipulateAsync(
      imageURI,
      [{ crop: { originX: 0, originY: 0, width: 200, height: 200 } }],
      { format: 'jpeg', base64: true }
    );
    this.setState({ image: processedImage });
    console.log(processedImage.width);
  };

  async snapPhoto() {
    if (this.camera) {
      console.log('Taking photo');
      const options = {
        quality: 0,
        base64: true,
        fixOrientation: true,
        exif: true
      };
      await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;

        this.setState({ image: photo });
        console.log(this.state.image.uri);

        //let imageURI = this.state.image.uri;

        this.props.navigation.navigate('picturePreview', {
          photo: photo
        });
        //Navigating to the next and passing the image object as a prop,

        //attempting to pass the image object from state previously photo param in navigation was sset to photo.
      });
    }
  }

  render() {
    const {
      container,
      textHeaderStyle,
      nextButton,
      buttonText,
      topHalf,
      bottomHalf,
      myButton
    } = styles;
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View style={container}>
              <TouchableOpacity
                style={myButton}
                onPress={this.snapPhoto.bind(this)}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  textHeaderStyle: {
    fontSize: 50,
    color: 'white'
  },
  nextButton: {
    marginTop: 20
  },
  buttonText: {
    fontSize: 30,
    color: 'white'
  },
  topHalf: {
    justifyContent: 'flex-start'
  },
  bottomHalf: {
    justifyContent: 'flex-start'
  },
  myButton: {
    marginBottom: 30,
    padding: 5,
    height: 100,
    width: 100, //The Width must be the same as the height
    borderRadius: 200, //Then Make the Border Radius twice the size of width or Height
    backgroundColor: 'white',
    borderColor: '#8A2BE2',
    borderWidth: 20
  }
});
