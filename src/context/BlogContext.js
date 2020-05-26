import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'; 

const blogReducer = (state, action) => {
	switch(action.type) {
		case 'get_BlogPosts':
			return action.payload;
		case 'add_BlogPost': 
			return [
				...state, 
				{ 
					id: Math.floor(Math.random() * 99999), 
					title: action.payload.title,
					content: action.payload.content
				}
			];
		case 'delete_BlogPost':
			return state.filter(blogPost => blogPost.id !== action.payload);
		case 'edit_BlogPost':
			return state.map( blog => {
				return (
					blog.id === action.payload.id 
					? action.payload
					: blog
				);
			})
		default:
			return state;
	}
}

const getBlogPosts = (dispatch) => {
	return async () => {
		const response = await jsonServer.get('/blogposts');
		dispatch({ type: 'get_BlogPosts', payload: response.data });
	};
};

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		await jsonServer.post('/blogposts',{ title, content });

		// dispatch({ type: 'add_BlogPost', payload: { title, content } });
		if(callback) {
			callback();
		}
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete_BlogPost', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({ type: 'edit_BlogPost', payload: { id, title, content } });
		if(callback) {
			callback();
		}
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost },
	[]
);

