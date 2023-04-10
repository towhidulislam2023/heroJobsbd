import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import AssingmentData from './components/AssignmentData/AssingmentData';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'job/:id',
        element: <JobDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/statistics',
        element: <AssingmentData />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      }
    ]
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);