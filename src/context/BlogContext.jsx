import { createContext, useState } from 'react';
const BlogContext = createContext();

const useBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const setUpBlog = (data) => {
    setBlogs(data);
  };

  return {
    blogs,
    setUpBlog,
  };
};

export const BlogProvider = ({ children }) => {
  const blog = useBlog();

  return <BlogContext.Provider value={blog}>{children}</BlogContext.Provider>;
};

export default BlogContext;
