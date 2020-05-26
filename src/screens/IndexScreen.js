import React,{ useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Fontisto, Entypo } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
	
	useEffect(() => {
		getBlogPosts();
		
		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts(); 	
		});	

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={blog => blog.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity 
							onPress={() => 	navigation.navigate('Show',{ id: item.id }) }
						>
							<View style={styles.blogListContainer} >
								<Text style={styles.blogText}>{item.title} - {item.id}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
									<Fontisto style={styles.icon} name="trash"/>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => {
			return (
				<TouchableOpacity 
					onPress={() => navigation.navigate('Create')}
					style={{ marginRight: 10 }}
				>
					<Entypo name="plus" size={25} />
				</TouchableOpacity>
			);
		}
	}
}

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
