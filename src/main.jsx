import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from '../pages/HomePage.jsx'
import ErrorPage from '../pages/ErrorPage.jsx';
import ResumePage from '../pages/ResumePage.jsx'
import ContactPage from '../pages/ContactPage.jsx'
import EducationPage from '../pages/EducationPage.jsx'
import WorkPage from '../pages/WorkPage.jsx'
import './index.css'


const router = createBrowserRouter([
 {
  path:'/',
  element: <App />,
  errorElement:<ErrorPage />,
  children:[
    {
      index:true,
      element:<HomePage />
    },
   {
      path:'/resume',
      element:<ResumePage />

   },
   {
    path:'/contact',
    element:<ContactPage />
   },
   {
    path:'/education',
    element:<EducationPage/>
   },
   {
    path:'/work',
    element:<WorkPage/>
   }

  ]

 }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
