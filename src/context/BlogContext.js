import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer'; 

const blogReducer = (state, action) => {
	switch(action.type) {
		case 'get_BlogPosts':
			return action.payload;
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
		if(callback) {
			callback();
		}
	};
};

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		await jsonServer.delete(`/blogposts/${id}`);
		dispatch({ type: 'delete_BlogPost', payload: id });
	};
};

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		await jsonServer.put(`/blogposts/${id}`, { title, content });
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

