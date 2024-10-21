import { createContext, useState } from 'react';
const BloglistContext = createContext();

const useBloglist = () => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const setError = (message) => {
    setMessage(message);
  };

  const setStyle = (type) => {
    setType(type);
  };

  const clearError = () => {
    setMessage(null);
  };

  return {
    message,
    type,
    setError,
    setStyle,
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

export default BloglistContext;
