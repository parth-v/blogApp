import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Context } from '../context/BlogContext';  

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	const blogPost = state.find( blog => blog.id === navigation.getParam('id'));
	return (
		<View>
			<Text>{blogPost.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ShowScreen;