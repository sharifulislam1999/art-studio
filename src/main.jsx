import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import Route from './Root/Route'
import AuthProvier from './Firebase/AuthProvier'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvier>
    <RouterProvider router={Route}></RouterProvider>
    </AuthProvier>
  </React.StrictMode>,
)
