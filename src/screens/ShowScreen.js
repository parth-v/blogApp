import React, { useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';  
import { FontAwesome } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const blogPost = state.find( blog => blog.id === navigation.getParam('id'));
	return (
		<View>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => {
			return (
				<TouchableOpacity 
					onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})} 
					style={{ marginRight: 10 }} 
				>
					<FontAwesome name="edit" size={30} />
				</TouchableOpacity>
			);
		}	
	};
};

const styles = StyleSheet.create({});

export default ShowScreen;