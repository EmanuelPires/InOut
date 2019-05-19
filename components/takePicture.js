import React from 'react';
import axios from 'axios';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class Picture extends React.Component {
  state = {
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
    return axios.post('http://localhost:3000/feedback/save', feedback);
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async snapPhoto() {
    console.log('Button Pressed');
    if (this.camera) {
      console.log('Taking photo');
      const options = {
        quality: 1,
        base64: true,
        fixOrientation: true,
        exif: true
      };
      await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;
        this.props.navigation.navigate('picturePreview', {
          photo: photo.uri
        });
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
      bottomHalf
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
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
                onPress={this.snapPhoto.bind(this)}

                // this.setState({
                //   type:
                //     this.state.type === Camera.Constants.Type.back
                //       ? Camera.Constants.Type.front
                //       : Camera.Constants.Type.back
                // });
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                >
                  {' '}
                  Snap Pic!{' '}
                </Text>
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
    justifyContent: 'space-evenly'
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
  }
});
