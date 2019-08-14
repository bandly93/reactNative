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

    _renderItem = ({item}) => <View>
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
                        <Ionicons style = {styles.icon} name = 'ios-close' focused = "true" size = {24} onPress = {this._onPress}/>
                        <View>
                            <Text>{modalData.firstName}</Text>
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
       backgroundColor : '#f2efef',
   },
   avatar : {
       height:25,
       width:25,
   },
   icon : {
       justifyContent:'flex-end',
   }
})