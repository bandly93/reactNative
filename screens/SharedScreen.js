import React from 'react';
import { View , Text} from 'react-native';

export default function SharedScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <View>
    <Text>Welcome to the Shared screen page!</Text>
  </View>
}

SharedScreen.navigationOptions = {
  title: 'Shared Documents',
};
