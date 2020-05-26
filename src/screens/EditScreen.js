import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam('id');
	const { state, editBlogPost } = useContext(Context);
	const blogPost = state.find(blog => blog.id === id);

	return (
		<BlogPostForm 
		  initialValues = {
		  	{ 
		  		title: blogPost.title, 
		  		content: blogPost.content 
		  	}
		  }
			onSubmit={(title, content) => editBlogPost(id, title, content)}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
