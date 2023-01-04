import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '@/App.css';
import RoutesPage from '@/components/pages/RoutesPage';
import IssuesPage from '@/components/pages/IssuesPage';
import SignUpPage from '@/components/pages/SignUpPage';
import 'reset-css';
import SignInPage from '@/components/pages/SignInPage';

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
    element: <RoutesPage />,
  },
  {
    path: '/issues/:owner/:repo',
    element: <IssuesPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
