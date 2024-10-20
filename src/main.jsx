import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BloglistProvider } from './context/BloglistContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BloglistProvider>
      <App />
    </BloglistProvider>
  </StrictMode>
);
