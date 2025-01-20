import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import AppliedJobs from './Components/Applied Jobs/AppliedJobs.jsx'
import Blog from './Components/Blog/Blog.jsx'
import Home from './Components/Home/Home.jsx'
import Statistic from './Components/Statistic/Statistic.jsx'
import JobDetails from './Components/Home/Featured Jobs/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/statistic',
        element: <Statistic/>
      },
      {
        path: '/applied-Jobs',
        element: <AppliedJobs/>,
        loader: ()=> fetch("/jobs.json")
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/job-details/:id',
        element: <JobDetails/>,
        loader: ()=> fetch("/jobs.json")
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
