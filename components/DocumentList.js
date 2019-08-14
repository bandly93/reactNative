import React, {Component} from 'react';
import { View,StyleSheet,FlatList,Text,Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ModalComp from './ModalComp';
import { connect } from 'react-redux';
import { updateView } from '../redux/viewModule';
import { toggleModalOff,toggleModalOn, updateModalProps} from '../redux/modalModule';

const placeholderImg = 'https://www.associationservicesgroup.net/wp-content/uploads/2017/07/PDF-Placeholder-e1500896019213.png';
const dots = 'https://cdn0.iconfinder.com/data/icons/smoothies-vector-icons-volume-2/48/143-512.png';

class DocumentList extends Component{

    _handlePress = (student) => {
        const { updateModalProps,toggleModalOn} = this.props;
        updateModalProps(student);
        toggleModalOn();
    }
    _renderItem = ({item}) => <View style = {styles.flatListItem}>
		<View style = {styles.docTitle}>
            <View style = {styles.docTitleLeft}>
			    <Image source = {{uri:item.pic}} style = {styles.avatar} />
			    <Text style ={{paddingTop:5}}> {item.firstName} {item.lastName} </Text>
            </View>
            <View style = {styles.docTitleRight}>
                <TouchableOpacity value = {item.name} onPress = {()=>this._handlePress(item)}>
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

    render(){
        return (
           <View style = {styles.container}>
               <ScrollView>
                    <View>
                        <FlatList
						    data = {this.props.students} 
						    keyExtractor = {this._keyExtractor}
						    renderItem ={this._renderItem} 
                        />
                        <ModalComp />
                    </View>
				</ScrollView>
           </View>
        )
    }
}

const mapDispatchToProps = {
    updateView,
    toggleModalOff,
    toggleModalOn,
    updateModalProps,
}

const mapStateToProps = (state) =>{
    return {
        view : state.view,
        modal : state.modal,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DocumentList);

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