import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '@/App.css';
import SignUpPage from '@/components/pages/SignUpPage';
import 'reset-css';
import SignInPage from '@/components/pages/SignInPage';
import SearchProductsPage from '@/components/pages/SearchProductsPage';
import RoutesPage from '@/components/pages/RoutesPage';
import {QueryParamProvider} from 'use-query-params';
import {ReactRouter6Adapter} from 'use-query-params/adapters/react-router-6';

const routes = [
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
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          {routes.map(({path, element}, index) => (
            <Route path={path} element={element} key={index} />
          ))}
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>
);
