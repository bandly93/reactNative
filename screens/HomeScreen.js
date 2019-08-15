import React,{ useState,useEffect } from 'react';
import SearchBarComp from '../components/SearchBarComp.js';
import DocumentList from '../components/DocumentList.js';
import { StyleSheet,View,} from 'react-native';

const HomeScreen = () => {
	const [students,updateStudents] = useState(null);
	
	useEffect(() => {
		async function fetchApi(){
			const response = await fetch('https://www.hatchways.io/api/assessment/students');
			const { students } = await response.json();
			updateStudents(students);
		}
		fetchApi();
	},[]);

	if(students){	
		return <View style = {styles.container}>
			<SearchBarComp />
			<DocumentList students = {students}/>
		</View>
	}else{
		return null
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
	container : {
		flex:1,
		backgroundColor : '#fff',
	},
});
