# InOut

![InOut1](https://user-images.githubusercontent.com/43054091/59390286-d4408e00-8d3e-11e9-8fbe-95a650fef765.png)

This is a full stack mobile app developed by Rachit Vijay and Emanuel Pires.

This app was created as both a learning experience and as an in-kind donation to the Fairfax County Arts Council's InOut Springfield installation.

The app is built with Expo and React-Navigation.  The app will take a user's responses to a set of survey questions and post the answers to a Mongo database.

![InOut2](https://user-images.githubusercontent.com/43054091/59390312-e3274080-8d3e-11e9-9365-40765e52b556.png)

![InOut3](https://user-images.githubusercontent.com/43054091/59390326-ed493f00-8d3e-11e9-8071-cb459e79b9e5.png)

![InOut4](https://user-images.githubusercontent.com/43054091/59390364-06ea8680-8d3f-11e9-8c2e-68a8f07ed5e1.png)

![InOut5](https://user-images.githubusercontent.com/43054091/59390378-11a51b80-8d3f-11e9-931a-70dc736c8230.png)

Here you can see that the app is console logging the object it creates as the user goes through the survey.

![InOut6](https://user-images.githubusercontent.com/43054091/59390391-1c5fb080-8d3f-11e9-94f3-56f6cfd2faf4.png)

![InOut7](https://user-images.githubusercontent.com/43054091/59390431-33060780-8d3f-11e9-8a26-2728790d1aec.png)

After the data is posted to Mongo the app will open the IOS mobile device's camera and allow the user to take a selfie. 

From there the user is directed to a preview screen and if the user is happy with their picture the app will do a post to our backend. The back end hosted on Heroku will hit the Twitter API and create the tweet using the image and the hashtag #INOUTSPRINGFIELD.

You can see the app working at locations in Springfield July 13 through August 23.

You can learn more about the installation here https://www.inoutexperience.com/

