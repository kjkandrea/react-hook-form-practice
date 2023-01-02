import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '@/App.css';
import GithubRepositoriesPage from '@/components/pages/GithubRepositoriesPage';
import IssuesPage from '@/components/pages/IssuesPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <GithubRepositoriesPage />,
  },
  {
    path: '/issues/:owner/:repo',
    element: <IssuesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
