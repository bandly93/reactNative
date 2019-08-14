import React,{Component} from 'react';
import SearchBarComp from '../components/SearchBarComp.js';
import DocumentList from '../components/DocumentList.js';
import { connect } from 'react-redux';
import { updateModalProps } from '../redux/modalModule';
import {
  StyleSheet, 
	View,
} from 'react-native';

class HomeScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			students : null,
		}
	}

	async componentDidMount(){
		const response = await fetch('https://www.hatchways.io/api/assessment/students');	
		const { students } = await response.json();
		this.setState({students});
	}

	render(){
		const { students } = this.state;

		if(students){
			return<View style = {styles.container}>
				<SearchBarComp />
				<DocumentList students = {students}/>
			</View>
		}else{
			return null
		}
	}
}

const mapDispatchToProps = { 
	updateModalProps,
}

const mapStateToProps = (state) =>{
	return {
		modal:state.modal,
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
		flex:1,
    backgroundColor: '#fff',
  },
 });