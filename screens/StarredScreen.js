import React from 'react';
import { ScrollView, StyleSheet,View,Text } from 'react-native';


export default function StarredScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          Welcome to the StarredScreen page!
        </Text>
      </View>
      
    </ScrollView>
  );
}

StarredScreen.navigationOptions = {
  title: 'Starred Documents',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
