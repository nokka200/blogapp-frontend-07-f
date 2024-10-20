import { createContext, useState, useContext } from 'react';
const BloglistContext = createContext();

const useBloglist = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const setError = (message) => {
    setErrorMessage(message);
  };

  const clearError = () => {
    setErrorMessage(null);
  };

  return {
    errorMessage,
    setError,
    clearError,
  };
};

export const BloglistProvider = ({ children }) => {
  const bloglist = useBloglist();

  return (
    <BloglistContext.Provider value={bloglist}>
      {children}
    </BloglistContext.Provider>
  );
};

export const useBloglistContext = () => {
  return useContext(BloglistContext);
};

export default BloglistContext;
