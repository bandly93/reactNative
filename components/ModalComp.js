import React,{ Component } from 'react';
import { Modal, View,Text , StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import { toggleModalOff, updateModalProps} from '../redux/modalModule';
import { connect } from 'react-redux';
import { modalListData } from '../constants/ModalListData';
import { FlatList } from 'react-native-gesture-handler';
import TabBarIcon from '../components/TabBarIcon';
import { Ionicons } from '@expo/vector-icons';
//trying hooks for the first time
class ModalComp extends Component{

    _onPress = () => {
        const { updateModalProps,toggleModalOff} = this.props;
        updateModalProps({});
        toggleModalOff();
    }

    _renderItem = ({item}) => <View style = {styles.flatListItem}>
        <Ionicons name = {item.icon} style = {styles.flatListImage} size = {20}/>
        <Text>{item.name}</Text>
    </View>

    _keyExtractor = (item,index) => item.name;

    render(){
        const { modalActive,modalData } = this.props.modal;
        return <ScrollView>
            <TouchableOpacity>
                <Modal 
                    style = {styles.modal}
                    visible = {modalActive} 
                    transparent = {true}
                    animationType = 'slide'>
                    <View style = {styles.modal}>
                        <View style = {styles.titleContainer}>
                            <Text>{modalData.firstName} {modalData.lastName}</Text>
                            <Ionicons style = {styles.icon} name = 'ios-close' focused = "true" size = {24} onPress = {this._onPress}/>
                        </View>
                        <FlatList
                            data = {modalListData}
                            keyExtractor = {this._keyExtractor}
                            renderItem = {this._renderItem}
                        />
                    </View>
                </Modal>
            </TouchableOpacity>
        </ScrollView>
    }
}

const mapDispatchToProps = {
    toggleModalOff,
    updateModalProps,
}

const mapStateToProps = (state) => {
    return {
        modal : state.modal,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalComp);

const styles = StyleSheet.create({
   modal : {
       marginTop:400,
       flex:1,
       backgroundColor:'white',
   },
   titleContainer:{
       flexDirection :'row',
       justifyContent:'space-between',
       margin:20,
       borderBottomColor : '#f2efef',
       borderBottomWidth : 1,
       borderRadius: 20,
       paddingBottom:10,
   },
   avatar : {
       height:25,
       width:25,
   },
   icon : {
       justifyContent:'flex-end',
   },
   flatListItem : {
       flexDirection : 'row',
       margin : 15,
   },
   flatListImage :{
       marginRight : 20,
       width:30,
       height:30,
       marginLeft:10,
   }
})