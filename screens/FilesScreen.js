import React , { Component } from 'react';
import { View, Text } from 'react-native';

class FilesScreen extends Component{
    render(){
        return<View>
            <Text> Welcome to the FilesScreen</Text>
        </View>
    }
}

FilesScreen.navigationOptions = {
    title : 'Files',
}

export default FilesScreen;