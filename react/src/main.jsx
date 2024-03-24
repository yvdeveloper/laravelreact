import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import router from "./router.jsx"
import { ContextProvider } from './contexts/ContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
)


//https://www.youtube.com/watch?v=qJq9ZMB2Was
//2:36:15