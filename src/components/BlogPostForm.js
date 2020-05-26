import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

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
				title="Save Blog Post" 
				onPress={() => onSubmit(title, content)} 
			/>
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: '',
		content: ''
	}
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

export default BlogPostForm;