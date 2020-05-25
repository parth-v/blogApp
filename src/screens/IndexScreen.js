import React,{ useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Fontisto } from '@expo/vector-icons';

const IndexScreen = () => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);

	return (
		<View>
			<Button title="Add post" onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={blog => blog.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.blogListContainer} >
							<Text style={styles.blogText}>{item.title} - {item.id}</Text>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
								<Fontisto style={styles.icon} name="trash"/>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	blogListContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10,
		borderTopWidth: 2,
		borderColor: 'gray'
	},
	icon: {
		fontSize: 25
	},
	blogText: {
		fontSize: 18
	}
});

export default IndexScreen;
