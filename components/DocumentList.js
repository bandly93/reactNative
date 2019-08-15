import React from 'react';
import { View,StyleSheet,FlatList,Text,Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ModalComp from './ModalComp';
import { useDispatch } from 'react-redux';
import { toggleModalOn, updateModalProps} from '../redux/modalModule';
import { images } from '../constants/ImageObj';
const { dots,placeholderImg } = images;

const DocumentList = ({students}) => {
    const dispatch = useDispatch();

    _handlePress = (student) => {
        dispatch(updateModalProps(student));
        dispatch(toggleModalOn());
    }

    _renderItem = ({item}) => <View style = {styles.flatListItem}>
		<View style = {styles.docTitle}>
            <View style = {styles.docTitleLeft}>
			    <Image source = {{uri:item.pic}} style = {styles.avatar} />
			    <Text style ={{paddingTop:5}}> {item.firstName} {item.lastName} </Text>
            </View>
            <View style = {styles.docTitleRight}>
                <TouchableOpacity value = {item.name} onPress = {()=>_handlePress(item)}>
                    <Image  
                        style = {styles.dots} 
                        source = {{uri:dots}}
                    />
                </TouchableOpacity>
            </View>
		</View>
		<View style = {styles.flatListImgContainer}>
			<Image source = {{uri:placeholderImg}} style = {styles.flatListImg} />
		</View>
        <View style = {styles.flatListStatus}>
            <Text style = {styles.flatListStatusText}> You edited in the past year</Text>
        </View>
	</View>

    _keyExtractor = (item,index) => item.id;

    return (
        <View style = {styles.container}>
            <ScrollView>
                <View>
                    <FlatList
						data = {students} 
						keyExtractor = {_keyExtractor}
						renderItem ={_renderItem} 
                    />
                    <ModalComp />
                </View>
			</ScrollView>
        </View>
    )
}

export default DocumentList;

const styles = StyleSheet.create({
    container: {
        paddingTop : 10,
		margin:15,
    },
 	getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
	flatListItem : {
        flexDirection :'column',
        borderBottomColor : '#f2efef',
        borderBottomWidth: 1,
	},
	avatar : {
		width:25,
		height:25,
    },
    docTitle:{
        marginTop:15,
        flexDirection : 'row',
        justifyContent:'space-between',
    },
    docTitleLeft:{
        flexDirection:'row',
        marginBottom:15,
    },
    docTitleRight:{
        marginTop:5,
    },
    flatListImgContainer:{
        height:150,
        backgroundColor:'#f2efef',
        borderRadius:8,
        position:'relative',
        overflow:'hidden',
    },
    flatListImg:{
        marginTop:25,
        width:300,
        height:300,
        alignSelf:'center',
    },
    flatListStatus:{
        marginTop:15,
        marginBottom :25,
    },
    flatListStatusText:{
        fontSize:12,
        color:'grey',
        fontWeight:'100',
    },
    dots:{
        height:15,
        width:15,
        alignSelf:'flex-end',
    },
 });