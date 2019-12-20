import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `New Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(reducer, [{title: 'Booyah #1'}]);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return(
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;