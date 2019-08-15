import React from 'react';
import { Modal, View,Text , StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import { toggleModalOff, updateModalProps} from '../redux/modalModule';
import { useDispatch,useSelector } from 'react-redux';
import { modalListData } from '../constants/ModalListData';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ModalComp = () => {

    const dispatch = useDispatch();
    const { modalActive,modalData } = useSelector(state => state.modal);

    _onPress = () => {
        dispatch(updateModalProps({}));
        dispatch(toggleModalOff());
    }

    _renderItem = ({item}) => <View style = {styles.flatListItem}>
        <Ionicons name = {item.icon} style = {styles.flatListImage} size = {20}/>
        <Text>{item.name}</Text>
    </View>

    _keyExtractor = (item,index) => item.name;

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
                        <Ionicons style = {styles.icon} name = 'ios-close' focused = "true" size = {24} onPress = {_onPress}/>
                    </View>
                    <FlatList
                        data = {modalListData}
                        keyExtractor = {_keyExtractor}
                        renderItem = {_renderItem}
                    />
                </View>
            </Modal>
        </TouchableOpacity>
    </ScrollView>
}

export default ModalComp;

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