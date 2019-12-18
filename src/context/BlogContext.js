import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPost] = useState([{title: 'Booyah #1'}]);

  const addBlogPost = () => {
    setBlogPost([...blogPosts, { title: `New Blog Post #${blogPosts.length + 1}`}])
    console.log("adding a blog post")
  };

  return(
    <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;