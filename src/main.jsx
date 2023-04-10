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
const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('Jobs.json')
      },
      {
        path:"job/:id",
        element:<JobDetails></JobDetails>,
      },
      {
        path:"/appliedJobs",
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('Jobs.json')
      },
      {
        path:"/statistics",
        element:<AssingmentData></AssingmentData>,
        loader: () => fetch('asssignment.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
