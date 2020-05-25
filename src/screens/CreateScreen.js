import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';  

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlogPost } = useContext(Context);
	return (
		<View>
			<Text style={styles.text}>
				Enter Title:
			</Text>
			<TextInput 
				style={styles.input} 
				value={title} 
				onChangeText={setTitle}
			/>
			<Text style={styles.text}>
				Enter Content:
			</Text>
			<TextInput 
				style={styles.input} 
				value={content} 
				onChangeText={setContent}
			/>
			<Button 
				title="Add Blog Post" 
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate('Index');
					});
				}} 
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		margin: 5
	},
	input: {
		fontSize:18,
		borderWidth: 1,
		marginBottom: 20,
		padding: 5,
		margin:5
	}
});

export default CreateScreen;