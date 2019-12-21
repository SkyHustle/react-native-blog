import createDataContext from './createDataContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          title: `New Blog Post #${state.length + 1}`,
          id: Math.random()
        }
      ];
    case 'delete_blogpost':
      return [
        ...state,
        {
          title: `New Blog Post #${state.length + 1}`,
          id: Math.random()
        }
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

const deleteBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'delete_blogpost' })
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
