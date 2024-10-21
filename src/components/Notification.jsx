import { useContext } from 'react';
import BloglistContext from '../context/BloglistContext';

const Notification = () => {
  const { message, type } = useContext(BloglistContext);
  if (!message) {
    return null;
  }

  const style = {
    backgroundColor: 'lightgrey',
    margin: '10px',
    padding: '10px',
    border: '2px solid',
    borderColor: type === 'success' ? 'green' : 'red',
    borderRadius: '5px',
  };

  return <div style={style}>{message}</div>;
};

export default Notification;
