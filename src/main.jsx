import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BloglistProvider } from './context/BloglistContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BloglistProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </BloglistProvider>
    </QueryClientProvider>
  </StrictMode>
);
