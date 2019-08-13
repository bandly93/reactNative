import React, {Component} from 'react';
import { View,TextInput,StyleSheet,Icon } from 'react-native';
import { SearchBar } from 'react-native-elements';


class SearchBarComp extends Component{
    constructor(){
        super();
        this.state = {
            textState : null,
        }
    }
    _updateText = (e) => {
        const { value } = e.target;
        this.setState({textState:value});
    }

    render(){
        return <View style = {styles.searchBar}>
            <TextInput 
                style = {styles.inputText}
                value = {this.state.textState} 
                placeholder = 'Search Drive'
                onChange = {this._updateText}
            />          
        </View>
    }
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
})


