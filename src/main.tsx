import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '@/App.css';
import SignUpPage from '@/components/pages/SignUpPage';
import 'reset-css';
import SignInPage from '@/components/pages/SignInPage';
import SearchProductsPage from '@/components/pages/SearchProductsPage';
import RoutesPage from '@/components/pages/RoutesPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RoutesPage />,
  },
  {
    path: '/search-products',
    element: <SearchProductsPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
