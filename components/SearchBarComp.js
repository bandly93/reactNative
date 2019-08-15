import React, { useState } from 'react';
import { View,TextInput,StyleSheet } from 'react-native';

const SearchBarComp = () => {
    const [textState,updateText] = useState('');
    return <View style = {styles.searchBar}>
        <TextInput 
            style = {styles.inputText}
            value = {textState} 
            placeholder = 'Search Drive'
            onChange = {(e)=>updateText(e.target.value)}
        />          
    </View>
}

export default SearchBarComp;

const styles = StyleSheet.create({
    searchBar : {
        flexDirection:'row',
        paddingTop : 50,
        paddingLeft : 10,
        paddingRight : 10,
    },
    inputText: {
        flex:1,
        borderRadius : 10,
        borderWidth : 1,
        borderColor: '#efefef',
        height:50,
        paddingLeft : 20,
    }
});