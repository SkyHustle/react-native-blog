import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return(
    <BlogContext.Provider value={{number: 5, word: 'five'}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;