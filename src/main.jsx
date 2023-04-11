import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import Layout from './components/Layout'
import Index from './pages/Index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, children:[
      {
        index:true,
        element:<Index/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider
    router={router}
  />
)
