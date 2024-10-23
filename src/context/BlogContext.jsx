import { createContext, useState } from 'react';
const BlogContext = createContext();

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const addNewBlog = (newBlog) => {
    setBlogs(blogs.concat(newBlog));
  };

  return {
    blogs,
    addNewBlog,
  };
};
