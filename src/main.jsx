import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import AssingmentData from './components/AssignmentData/AssingmentData';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path:"job/:id",
        element:<JobDetails></JobDetails>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path:"/statistics",
        element:<AssingmentData></AssingmentData>,
        loader: () => fetch('asssignment.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path:"/blog",
        element:<Blog></Blog>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path:"/*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
